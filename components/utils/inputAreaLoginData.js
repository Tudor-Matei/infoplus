import { loginFields } from "../../utils/lengthBoundariesForFields";

export default [
    {
        title: "E-mail/Nume utilizator",
        inputType: "text",
        inputProps: {
            minLength: loginFields.username[0],
            maxLength: loginFields.username[1],
            required: true,
        },
        fieldName: "username",
    },
    {
        title: "Parola",
        inputType: "password",
        inputProps: {
            minLength: loginFields.password[0],
            maxLength: loginFields.password[1],
            required: true,
        },
        fieldName: "password",
    },
];
