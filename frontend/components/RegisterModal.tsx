import Modal from "./common/Modal";
import authStore from "../stores/AuthStore";
import {observer} from "mobx-react-lite";
import React from "react";
import {BaseButton} from "./common/BaseButton";

const LoginModal = observer(() => {
    return (
        <Modal isOpen={authStore.registerModalOpen} toggleModal={authStore.toggleRegisterModal} maxWidth="container lg:max-w-2xl">
            <div className="bg-dark rounded-md shadow">
                <div
                    className="p-4 w-full h-full text-3xl font-bold text-center bg-gradient-to-l from-green-600 to-green-500 rounded-t-lg">Register
                </div>
                <div className="p-9 text-center">
                    <h1 className="text-xl text-gray-300">
                        Thank you for your interest in a website account!
                    </h1>
                    <p className="my-3 text-gray-400">
                        We are currently <span className="text-blue-400">Beta</span> testing our website system. We plan to release it to the public in the upcoming season.
                    </p>
                    <BaseButton type="success" className="w-full" onClick={() => authStore.toggleRegisterModal()}>
                        Okay!
                    </BaseButton>
                </div>
            </div>
        </Modal>
    )
})

export default LoginModal
