import { useState, useContext } from "react";
import { ShowAlertContext } from "../../pages/_app";
import { RegisterModalHandler } from "../Home/Main";
import { LoginModalHandler } from "../Home/Main";
import { LoggedInDataContext } from "../../pages/_app";
import checkFieldsValidity from "../../utils/checkFieldsValidity";

export default function SubmitButton({
    userDetails,
    fieldOptions,
    showErrorMessage,
    buttonTitle,
    type,
}) {
    const [isDisabled, setDisabled] = useState(false);

    const showModalHandler = useContext(
        type === "register" ? RegisterModalHandler : LoginModalHandler
    );
    const modifyAlert = useContext(ShowAlertContext);
    let isAuthenticatedHandler;
    if (type === "login") isAuthenticatedHandler = useContext(LoggedInDataContext);
    console.log(isAuthenticatedHandler, LoggedInDataContext, 1);
    return (
        <>
            <button
                type="submit"
                disabled={isDisabled}
                onClick={(e) =>
                    submitHandler({
                        e,
                        userDetails,
                        fieldOptions,
                        showErrorMessage,
                        setDisabled,
                        modalHandler: showModalHandler,
                        modifyAlert,
                        fetchEndpoint: `api/${type}`,
                        isAuthenticatedHandler,
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
    userDetails,
    fieldOptions,
    showErrorMessage,
    setDisabled,
    modalHandler,
    modifyAlert,
    fetchEndpoint,
    isAuthenticatedHandler = undefined,
}) {
    e.preventDefault();
    setDisabled(true);

    const errorMessage = checkFieldsValidity({
        fields: userDetails,
        ...fieldOptions,
    });

    if (errorMessage !== false) {
        setDisabled(false);
        return showErrorMessage(errorMessage);
    }

    fetch(fetchEndpoint, {
        method: "POST",
        body: JSON.stringify(userDetails),
    })
        .then((r) => r.json())
        .then(({ ok, error = null }) => {
            if (!ok) {
                modifyAlert({
                    isVisible: true,
                    props: {
                        type: 0,
                        children: !error
                            ? "A apărut o eroare internă, vă rugam să ne scuzați."
                            : error,
                    },
                });
                setDisabled(false);
            } else {
                modifyAlert({
                    isVisible: true,
                    props: {
                        type: 1,
                        children: "Operațiunea a fost efectuată cu succes.",
                    },
                });
                modalHandler();
                if (isAuthenticatedHandler) isAuthenticatedHandler.setAuthenticatedTo(true);
            }
        })
        .catch((error) => {
            console.error(error);
            setDisabled(false);
            showErrorMessage("A aparut o eroare interna, va rog sa ne scuzati.");
        });
}
