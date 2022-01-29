import {toast} from "react-toastify";

export function throwError(text: string) {
    console.error(text);
    toast.error("We have run into an unexpected error!")
    history.back()
}
