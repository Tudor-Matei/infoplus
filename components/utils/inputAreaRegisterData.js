export default [
    {
        title: "Nume",
        inputType: "text",
        inputProps: { minLength: 3, required: true },
        fieldName: "name",
    },
    {
        title: "Prenume",
        inputType: "text",
        inputProps: { minLength: 3, required: true },
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
        inputProps: { minLength: 5, required: true },
        fieldName: "username",
    },
    {
        title: "E-mail",
        inputType: "email",
        inputProps: {
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
