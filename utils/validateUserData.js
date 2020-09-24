import checkFieldsValidity from "./checkFieldsValidity";
import escape from "validator/lib/escape";

export default function validateUserData(
    body = "",
    fieldOptions = { lengthBoundariesForEachField, hasEmail: false }
) {
    const escapedFields = escapeUserData(body);
    const errorMessage = checkFieldsValidity({
        fields: escapedFields,
        ...fieldOptions,
    });
    if (errorMessage) return { error: errorMessage, validatedUserData: {} };

    return { error: null, validatedUserData: escapedFields };
}

function escapeUserData(userData) {
    for (const [field, value] of Object.entries(userData)) userData[field] = escape(value);

    return userData;
}
