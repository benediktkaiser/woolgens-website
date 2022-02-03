import {observer} from "mobx-react-lite";
import NavbarLayout from "../../layout/NavbarLayout";
import Announcement from "../../components/common/Announcement";
import {FiBell} from "react-icons/fi"
import {BaseButton} from "../../components/common/BaseButton";
import React, {useState} from "react";
import Modal from "../../components/common/Modal";

const VoteIndexPage: NextPageWithLayout = observer(() => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <Announcement
                icon={<FiBell/>}
                text="Welcome to the new Website! We hope you enjoy it."
                rightComponent={<BaseButton onClick={() => setIsOpen(true)} type="primary">Create account</BaseButton>}
                iconStyles="bg-blue-500 text-white"
            />
            <Modal isOpen={isOpen} title="Test" classes="" toggleModal={() => setIsOpen(!isOpen)}>
                <h1>Test</h1>
            </Modal>
        </div>
    )
})

VoteIndexPage.getLayout = function getLayout(page) {
    const seo = {
        title: "Vote",
        description: "Vote for our server to gain exclusive rewards, while simultaneously supporting us!"
    }

    return (
        <NavbarLayout seo={seo}>
            {page}
        </NavbarLayout>
    )
}

export default VoteIndexPage
