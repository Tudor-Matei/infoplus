import { ShowAlertContext, LoggedInDataContext } from "../../pages/_app";
import { useContext } from "react";
import { useRouter } from "next/router";

export default function LogoutButton({ type }) {
    const modifyAlert = useContext(ShowAlertContext);
    const isAuthenticatedHandler = useContext(LoggedInDataContext);
    const router = useRouter();

    if (type === "anchor")
        return (
            <a href="#" onClick={() => logout(modifyAlert, router, isAuthenticatedHandler)}>
                Deloghează-te
            </a>
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
    fetch("http://localhost:3000/api/logout", { method: "DELETE" }).then(({ ok, err }) => {
        console.log(ok, err);
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
