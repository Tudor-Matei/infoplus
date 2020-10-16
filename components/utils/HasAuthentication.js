import { useContext } from "react";
import { ShowAlertContext } from "../../pages/_app";
import useComponentDidMount from "../_hooks/componentDidMount";
import { useRouter } from "next/router";

export default function HasAuthentication({
    authState: {
        authenticated = false,
        err = "A apărut o eroare internă, vă rugăm să ne scuzați.",
    } = {},
    children,
}) {
    const createAlert = useContext(ShowAlertContext);
    const router = useRouter();

    useComponentDidMount(() => {
        if (!authenticated || err)
            createAlert({
                ofType: "error",
                saying: !authenticated && !err ? "Nu sunteți autentificat." : err,
                onClose: () => router.push("/"),
            });
    });
    if (!authenticated || err) return null;

    return <>{children}</>;
}
