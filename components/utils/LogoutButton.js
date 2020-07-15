import { ShowAlertContext, LoggedInDataContext } from "../../pages/_app";
import { useContext } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LogoutButton({ type, className, classNameForIcon }) {
    const modifyAlert = useContext(ShowAlertContext);
    const isAuthenticatedHandler = useContext(LoggedInDataContext);
    const router = useRouter();

    if (type === "anchor")
        return (
            <a href="#" onClick={() => logout(modifyAlert, router, isAuthenticatedHandler)}>
                Deloghează-te
            </a>
        );
    else if (type === "icon")
        return (
            <div
                className={className}
                onClick={() => logout(modifyAlert, router, isAuthenticatedHandler)}
            >
                <FontAwesomeIcon icon="sign-out-alt" className={classNameForIcon} />
            </div>
        );
    else
        return (
            <button
                className="button--primary"
                onClick={() => logout(modifyAlert, router, isAuthenticatedHandler)}
            >
                Deloghează-te
            </button>
        );
}

function logout(modifyAlert, router, isAuthenticatedHandler = null) {
    fetch("http://localhost:3000/api/logout", { method: "DELETE" })
        .then((r) => r.json())
        .then(({ ok, err = "A apărut o eroare internă, vă rugăm să ne scuzați." }) => {
            if (!ok) {
                modifyAlert({
                    isVisible: true,
                    props: {
                        type: 0,
                        children: err,
                    },
                });
            } else {
                modifyAlert({
                    isVisible: true,
                    props: {
                        type: 1,
                        children: "Operațiunea a fost efectuată cu succes.",
                    },
                    customToggleHandler: () => router.pathname !== "/" && router.push("/"),
                });
                if (isAuthenticatedHandler) isAuthenticatedHandler.setAuthenticatedTo(false);
            }
        });
}
