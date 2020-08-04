import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";

export default function checkFieldsValidity({
    fields,
    minimumLengthForEachField = {},
    customValidation = null,
    hasEmail = false,
}) {
    if (thereAreEmptyFields(Object.values(fields)))
        return "Nu ai completat unul sau mai multe câmpuri.";
    else if (fieldValuesAreNotLongEnough(fields, minimumLengthForEachField))
        return "Unul sau mai multe câmpuri nu indeplinesc numarul de caractere minim.";
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

function thereAreEmptyFields(fieldValues) {
    return fieldValues.some((fieldValue) => isEmpty(`${fieldValue}`));
}

function fieldValuesAreNotLongEnough(fields, minimumLengthForEachField) {
    for (const field of Object.keys(minimumLengthForEachField)) {
        if (fields[field].length < minimumLengthForEachField[field]) return true;
    }
    return false;
}
