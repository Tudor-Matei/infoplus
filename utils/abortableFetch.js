export default function abortableFetch(url, options) {
    const controller = new AbortController();
    const { signal } = controller;

    return {
        data: fetch(url, { ...options, signal }).catch(console.error),
        abort: () => controller.abort(),
    };
}
