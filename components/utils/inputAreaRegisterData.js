import { registerBoundaries } from "../../utils/lengthBoundariesForFields";

export default [
    {
        title: "Nume",
        inputProps: {
            minLength: registerBoundaries.name[0],
            maxLength: registerBoundaries.name[1],
            required: true,
        },
        fieldName: "name",
    },
    {
        title: "Prenume",
        inputProps: {
            minLength: registerBoundaries.surname[0],
            maxLength: registerBoundaries.surname[1],
            required: true,
        },
        fieldName: "surname",
    },
    {
        title: "Județ",
        isSelect: true,
        optionValues: ["Alba", "Cluj", "Bistrita-Nasaud"],
        fieldName: "county",
    },
    {
        title: "Profesie",
        isSelect: true,
        optionValues: ["Elev", "Profesor"],
        fieldName: "profession",
    },
    {
        title: "Nume Utilizator",
        inputProps: {
            minLength: registerBoundaries.username[0],
            maxLength: registerBoundaries.username[1],
            required: true,
        },
        fieldName: "username",
    },
    {
        title: "E-mail",
        inputProps: {
            type: "email",
            minLength: registerBoundaries.email[0],
            maxLength: registerBoundaries.email[1],
            required: true,
        },
        fieldName: "email",
    },
    {
        title: "Parola",
        inputProps: {
            type: "password",
            minLength: registerBoundaries.password[0],
            maxLength: registerBoundaries.password[1],
            required: true,
        },
        fieldName: "password",
    },
];
