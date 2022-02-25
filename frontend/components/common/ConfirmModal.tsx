import Modal from "./Modal";
import {BaseButton} from "./BaseButton";
import React, {FC} from "react";

interface ConfirmModelProps {
    text: string,
    close: () => unknown,
    confirm: () => unknown,
}

const ConfirmModal: FC<ConfirmModelProps> = ({text, close, confirm}) => {

    const closeAndConfirm = () => {
        close();
        confirm();
    }

    return (
        <Modal isOpen={true} maxWidth="max-w-lg">
            <div className="p-4 bg-dark-light rounded-md shadow">
                <div className="flex justify-between items-center py-2 px-4 bg-dark-light rounded-t-md">
                    <h1 className="text-xl font-bold">
                        Confirm
                    </h1>
                </div>
                <div className="p-4">
                    {text}
                </div>
                <footer className="flex gap-3 justify-end mt-4">
                    <BaseButton type="dark" onClick={close}>
                        No, cancel
                    </BaseButton>
                    <BaseButton type="danger" onClick={closeAndConfirm}>
                        Yes, proceed
                    </BaseButton>
                </footer>
            </div>
        </Modal>
    )
}

export default ConfirmModal
