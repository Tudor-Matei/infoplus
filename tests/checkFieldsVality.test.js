const checkFieldsValidity = require("../utils/checkFieldsValidity");

describe("testing field function", () => {
    let fields = {
        name: "",
        surname: "",
        password: "",
    };
    let minimumLengthForEachField = {
        name: 2,
        surname: 5,
        password: 8,
    };

    it("should find an empty field", () => {
        expect(
            checkFieldsValidity({
                fields,
                minimumLengthForEachField,
                hasEmail: false,
            })
        ).toEqual("Nu ai completat unul sau mai multe câmpuri.");
    });

    it("should not find an empty field", () => {
        fields = {
            name: "leo",
            surname: "leoasd",
            password: "leoasdasdad",
        };
        expect(
            checkFieldsValidity({
                fields,
                minimumLengthForEachField,
                hasEmail: false,
            })
        ).toBeFalsy();
    });

    it("should find fields that do not comply to the minimum length", () => {
        fields = {
            name: "leo",
            surname: "le",
            password: "le",
        };
        expect(
            checkFieldsValidity({
                fields,
                minimumLengthForEachField,
                hasEmail: false,
            })
        ).toEqual(
            "Unul sau mai multe câmpuri nu indeplinesc numarul de caractere minim."
        );
    });

    it("should not find any errors", () => {
        fields = {
            name: "leoasdasdasda",
            surname: "leasdasdasd",
            password: "lasdasdasdasde",
        };

        expect(
            checkFieldsValidity({
                fields,
                minimumLengthForEachField,
                hasEmail: false,
            })
        ).toBeFalsy();
    });
});
