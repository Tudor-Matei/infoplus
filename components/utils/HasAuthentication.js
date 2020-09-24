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
    const modifyAlert = useContext(ShowAlertContext);
    const router = useRouter();

    useComponentDidMount(() => {
        if (!authenticated || err)
            modifyAlert({
                isVisible: true,
                props: {
                    type: 0,
                    children: !authenticated && !err ? "Nu sunteți autentificat." : err,
                },
                // TODO replace all instances of Router with useRouter
                customToggleHandler: () => router.push("/"),
            });
    });
    if (!authenticated || err) return null;

    return <>{children}</>;
}
