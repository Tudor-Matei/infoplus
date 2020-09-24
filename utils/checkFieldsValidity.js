import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";

export default function checkFieldsValidity({
    fields,
    lengthBoundariesForEachField = {},
    customValidation = null,
    hasEmail = false,
}) {
    if (thereAreEmptyFields(Object.values(fields)))
        return "Nu ai completat unul sau mai multe câmpuri.";
    else if (fieldValuesDontHaveProperLength(fields, lengthBoundariesForEachField))
        return "Unul sau mai multe câmpuri nu se încadrează în numărul acceptat de caractere.";
    else if (customValidation && fieldsAreNotCustomValid(fields, customValidation))
        return "Nu ați respectat formatul/formatele cerut/e.";
    else if (hasEmail && !isEmail(fields.email ? fields.email : fields.username))
        return "E-mail-ul pe care l-ai introdus nu este valid.";

    return false;
}

function fieldsAreNotCustomValid(fields, { forFields = [], validator }) {
    return !Object.entries(fields).some(
        ([field, value], i) => forFields[i] === field && !validator.test(value)
    );
}

export function thereAreEmptyFields(fieldValues) {
    return fieldValues.some((fieldValue) => isEmpty(`${fieldValue}`));
}

// lengthBoundariesForEachField { [fieldName]: [lower limit, upper limit]  }
export function fieldValuesDontHaveProperLength(fields, lengthBoundariesForEachField = {}) {
    for (const field of Object.keys(lengthBoundariesForEachField)) {
        if (
            fields[field].length < lengthBoundariesForEachField[field][0] ||
            fields[field].length > lengthBoundariesForEachField[field][1]
        )
            return true;
    }
    return false;
}
