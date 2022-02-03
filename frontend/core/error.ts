import {toast} from "react-toastify";

export function throwError(text: string) {
    toast.error("We have run into an unexpected error!")
    throw new Error(`[Error]: ${text}`)
}
