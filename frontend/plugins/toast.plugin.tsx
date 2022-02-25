import {ToastContainer} from "react-toastify";

const Toast = () => {
    return <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        limit={5}
    />
}

export default Toast
