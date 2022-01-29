import {ToastContainer} from "react-toastify";

const Toast = () => {
    return <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        limit={4}
        theme="dark"
    />
}

export default Toast
