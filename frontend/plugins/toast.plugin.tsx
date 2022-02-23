import {ToastContainer} from "react-toastify";

const Toast = () => {
    return <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
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
