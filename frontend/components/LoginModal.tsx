import Modal from "./common/Modal";
import LoginComponent from "./LoginComponent";
import authStore from "../stores/AuthStore";
import {observer} from "mobx-react-lite";

const LoginModal = observer(() => {
    return (
        <Modal isOpen={authStore.loginModalOpen} toggleModal={authStore.toggleLoginModal} maxWidth="container lg:max-w-2xl">
            <LoginComponent/>
        </Modal>
    )
})

export default LoginModal
