import checkFieldsValidity, {
    thereAreEmptyFields,
    fieldValuesDontHaveProperLength,
} from "../../utils/checkFieldsValidity";
import {
    generalDataStepBoundaries,
    contentDataStepBoundaries,
    testsDataStepBoundaries,
} from "../../utils/lengthBoundariesForFields";
import omitKey from "../../utils/omitKey";

export default function isDataFromStepValid(step, fields) {
    switch (step) {
        case 1:
            return checkFieldsValidity({
                fields: omitKey(["category"], fields),
                lengthBoundariesForEachField: generalDataStepBoundaries,
                customValidation: { forFields: ["title"], validator: /[^a-zA-Z0-9 ]/ },
            });

        case 2:
            return checkFieldsValidity({
                fields,
                lengthBoundariesForEachField: contentDataStepBoundaries,
            });
        case 3:
            return checkFieldsValidity({ fields });
        case 4:
            for (const testFields of fields) {
                if (thereAreEmptyFields(Object.values(testFields)))
                    return "Nu ați completat unul sau mai multe câmpuri de date de intrare/date de ieșire.";
                if (fieldValuesDontHaveProperLength(testFields, testsDataStepBoundaries))
                    return "Unul dintre câmpuri nu îndeplinește numărul acceptat de caractere.";
            }
            return false;
    }
}
