import { serialize } from "cookie";
import { getNewAccessToken, getTokenInfo } from "./manageTokens";

function exitWithError(err) {
    return { authenticated: false, userData: null, err };
}

export default async function getAuthInfo(req, res) {
    let { data, err } = getTokenInfo(req.headers["cookie"]);

    if (data && !err) return { authenticated: true, userData: data, err: null };

    // v "token invalid"
    if (err !== "tokinv") return exitWithError(err);

    // generam un nou access token
    data = await getNewAccessToken(req.headers["cookie"]);
    if (data.err) return exitWithError(data.err);
    res.setHeader(
        "Set-Cookie",
        serialize("_accessToken", data.accessToken, {
            sameSite: true,
            path: "/",
        })
    );
    data.accessToken = null;

    return { authenticated: true, userData: data, err: null };
}
