import { useState, useContext } from "react";
import { ShowAlertContext } from "../../pages/_app";
import { RegisterModalHandler } from "../Home/Main";
import { LoginModalHandler } from "../Home/Main";
import checkFieldsValidity from "../../utils/checkFieldsValidity";

export default function SubmitButton({ userData, showErrorMessage, buttonTitle, type }) {
    const [isDisabled, setDisabled] = useState(false);

    const showModalHandler = useContext(
        type === "register" ? RegisterModalHandler : LoginModalHandler
    );
    const modifyAlert = useContext(ShowAlertContext);

    return (
        <>
            <button
                type="submit"
                disabled={isDisabled}
                onClick={(e) =>
                    submitHandler({
                        e,
                        userData,
                        showErrorMessage,
                        setDisabled,
                        modalHandler: showModalHandler,
                        modifyAlert,
                        fetchEndpoint: `api/${type}`,
                    })
                }
                className="button--primary"
            >
                {buttonTitle}
            </button>
            <style jsx>{`
                .button--primary {
                    background-color: var(--accent-secondary);
                }
            `}</style>
        </>
    );
}

function submitHandler({
    e,
    userData,
    showErrorMessage,
    setDisabled,
    modalHandler,
    modifyAlert,
    fetchEndpoint,
}) {
    e.preventDefault();
    setDisabled(true);

    const errorMessage = checkFieldsValidity({
        fields: userData,
        minimumLengthForEachField: {
            name: 3,
            surname: 3,
            username: 5,
            password: 8,
        },
        hasEmail: true,
    });

    if (errorMessage !== false) {
        setDisabled(false);
        return showErrorMessage(errorMessage);
    }

    fetch(fetchEndpoint, {
        method: "POST",
        body: JSON.stringify(userData),
    })
        .then((r) => r.json())
        .then(({ ok, error = null }) => {
            if (!ok)
                modifyAlert({
                    isVisible: true,
                    props: {
                        type: 0,
                        children: !error
                            ? "A apărut o eroare internă, vă rugam să ne scuzați."
                            : error,
                    },
                });
            else
                modifyAlert({
                    isVisible: true,
                    props: {
                        type: 1,
                        children: "Operațiunea a fost efectuată cu succes.",
                    },
                });

            modalHandler();
        })
        .catch((error) => {
            console.error(error);
            setDisabled(false);
            showErrorMessage("A aparut o eroare interna, va rog sa ne scuzati.");
        });
}
