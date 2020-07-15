//abortable fetch -> pentru a face vizibila metoda abort putem sa o legam de un useRef -> ref.current = { abort }

export default function abortableFetch(url, options) {
    const controller = new AbortController();

    return {
        data: fetch(url, { ...options, signal: controller.signal }).catch(console.error),
        abort: () => controller.abort(),
    };
}
