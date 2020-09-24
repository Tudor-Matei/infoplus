import { registerFields } from "../../utils/lengthBoundariesForFields";

export default [
    {
        title: "Nume",
        inputType: "text",
        inputProps: {
            minLength: registerFields.name[0],
            maxLength: registerFields.name[1],
            required: true,
        },
        fieldName: "name",
    },
    {
        title: "Prenume",
        inputType: "text",
        inputProps: {
            minLength: registerFields.surname[0],
            maxLength: registerFields.surname[1],
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
        inputType: "text",
        inputProps: {
            minLength: registerFields.username[0],
            maxLength: registerFields.username[1],
            required: true,
        },
        fieldName: "username",
    },
    {
        title: "E-mail",
        inputType: "email",
        inputProps: {
            minLength: registerFields.email[0],
            maxLength: registerFields.email[1],
            required: true,
        },
        fieldName: "email",
    },
    {
        title: "Parola",
        inputType: "password",
        inputProps: { minLength: 8, required: true },
        fieldName: "password",
    },
];
