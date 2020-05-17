import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";

export default function checkFieldsValidity({
    fields = {},
    minimumLengthForEachField = {},
    hasEmail = false,
}) {
    if (thereAreEmptyFields(Object.values(fields)))
        return "Nu ai completat unul sau mai multe câmpuri.";
    else if (fieldValuesAreNotLongEnough(fields, minimumLengthForEachField))
        return "Unul sau mai multe câmpuri nu indeplinesc numarul de caractere minim.";
    else if (hasEmail && !isEmail(fields.email))
        return "E-mail-ul pe care l-ai introdus nu este valid.";

    return false;
}

function thereAreEmptyFields(fieldValues) {
    return fieldValues.some((fieldValue) => isEmpty(fieldValue));
}

function fieldValuesAreNotLongEnough(fields, minimumLengthForEachField) {
    for (const field of Object.keys(minimumLengthForEachField)) {
        if (fields[field].length < minimumLengthForEachField[field]) return true;
    }
    return false;
}
