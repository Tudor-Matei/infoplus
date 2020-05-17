export default [
    {
        title: "E-mail/Nume utilizator",
        inputType: "text",
        inputProps: { minLength: 5, required: true },
        fieldName: "username",
    },
    {
        title: "Parola",
        inputType: "password",
        inputProps: { minLength: 8, required: true },
        fieldName: "password",
    },
];
