import { loginBoundaries } from "../../utils/lengthBoundariesForFields";

export default [
    {
        title: "E-mail / Nume utilizator",
        inputProps: {
            minLength: loginBoundaries.username[0],
            maxLength: loginBoundaries.username[1],
            required: true,
        },
        fieldName: "username",
    },
    {
        title: "Parola",
        inputProps: {
            type: "password",
            minLength: loginBoundaries.password[0],
            maxLength: loginBoundaries.password[1],
            required: true,
        },
        fieldName: "password",
    },
];
