import {toast} from "react-toastify";

function copyToClipBoard(text: string, toastText?: string) {
    navigator.clipboard.writeText(text).then(
        () => toast.success(toastText || 'Copied to the clipboard!')
    )
}

export default copyToClipBoard
