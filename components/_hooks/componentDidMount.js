import { useEffect } from "react";

export default function useComponentDidMount(callback) {
    return useEffect(callback, []);
}
