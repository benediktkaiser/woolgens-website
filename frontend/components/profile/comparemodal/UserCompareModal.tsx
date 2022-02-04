import Modal from "../../common/Modal";
import userCompareStore from "../../../stores/UserCompareStore";
import {observer} from "mobx-react-lite";
import UserCompareElement from "./UserCompareElement";
import {FiArrowRight, FiArrowLeft, FiMinus} from "react-icons/fi"

const UserCompareModal = observer(() => {

    const toggle = () => {
        userCompareStore.toggleModal()
    }

    return (
        <Modal isOpen={userCompareStore.modalOpen} toggleModal={toggle} maxWidth="container">
            <div className="p-4 bg-dark-light rounded-lg shadow">
                <div className="flex gap-8 justify-between items-center">
                    <UserCompareElement user={userCompareStore.userOne} />
                    <div className="text-center">
                        <div className="my-10 text-4xl font-bold">
                            VS.
                        </div>
                        <div className="flex flex-col gap-4 min-h-[300px]">
                            <FiArrowRight size="1.8rem" className="mx-auto" />
                            <FiArrowLeft size="1.8rem" className="mx-auto" />
                            <FiMinus size="1.8rem" className="mx-auto" />
                            <FiArrowLeft size="1.8rem" className="mx-auto" />
                            <div className="h-7" />
                            <FiArrowLeft size="1.8rem" className="mx-auto" />
                            <FiMinus size="1.8rem" className="mx-auto" />
                            <FiArrowLeft size="1.8rem" className="mx-auto" />
                            <FiArrowRight size="1.8rem" className="mx-auto" />
                            <FiArrowLeft size="1.8rem" className="mx-auto" />
                            <FiMinus size="1.8rem" className="mx-auto" />
                        </div>
                    </div>
                    <UserCompareElement user={userCompareStore.userTwo} />
                </div>
            </div>
        </Modal>
    )
})

export default UserCompareModal
