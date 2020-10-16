import { ShowAlertContext, LoggedInDataContext } from "../../pages/_app";
import { useContext } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LogoutButton({ type, className, classNameForIcon }) {
    const createAlert = useContext(ShowAlertContext);
    const isAuthenticatedHandler = useContext(LoggedInDataContext);
    const router = useRouter();

    if (type === "anchor")
        return (
            <a
                href="#"
                onClick={() => logoutAndShowReults(createAlert, router, isAuthenticatedHandler)}
            >
                Deloghează-te
            </a>
        );
    else if (type === "icon")
        return (
            <div
                className={className}
                onClick={() => logoutAndShowReults(createAlert, router, isAuthenticatedHandler)}
            >
                <FontAwesomeIcon icon="sign-out-alt" className={classNameForIcon} />
            </div>
        );
    else
        return (
            <button
                className="button--primary"
                onClick={() => logoutAndShowReults(createAlert, router, isAuthenticatedHandler)}
            >
                Deloghează-te
            </button>
        );
}

function logoutAndShowReults(createAlert, router, isAuthenticatedHandler = null) {
    fetch("http://localhost:3000/api/logout", { method: "DELETE" })
        .then((r) => r.json())
        .then(({ ok, err = "A apărut o eroare internă, vă rugăm să ne scuzați." }) => {
            if (!ok) {
                createAlert({ ofType: "error", saying: err });
                return;
            }

            createAlert({
                ofType: "success",
                onClose: () => router.pathname !== "/" && router.push("/"),
            });

            if (isAuthenticatedHandler) isAuthenticatedHandler.setAuthenticated(false);
        });
}
