export default [
    {
        title: "E-mail/Nume utilizator",
        inputType: "text",
        props: { minLength: 5, required: true },
        fieldName: "username",
    },
    {
        title: "Parola",
        inputType: "password",
        props: { minLength: 8, required: true },
        fieldName: "password",
    },
];
