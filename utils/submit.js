import checkFieldsValidity from "./checkFieldsValidity";

export default function submit({ to, fieldValues, fieldOptions }) {
    const errorMessage = checkFieldsValidity({
        fields: fieldValues,
        ...fieldOptions,
    });

    if (errorMessage) return Promise.reject({ fromFieldsValidity: true, message: errorMessage });

    return fetch(to, {
        method: "POST",
        body: JSON.stringify(fieldValues),
    }).then((r) => r.json());
}
