export default async function useAbortableFetch(url, options) {
    const controller = new AbortController();
    const signal = controller.signal;
    let error = null,
        loading = true;
    const data = await fetch(url, { ...options, signal })
        .catch((err) => (error = err))
        .then(() => (loading = false));

    return [data, loading, error, controller.abort];
}
