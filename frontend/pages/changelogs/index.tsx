import NavbarLayout from "../../layout/NavbarLayout";
import Announcement from "../../components/common/Announcement";
import {FiBook} from "react-icons/fi"
import React, {useEffect, useState} from "react";
import ChangeLogGrid from "../../components/changelog/ChangeLogGrid";
import changeLogStore from "../../stores/ChangeLogStore";

const ForumIndexPage = () => {
    const [changeLogs, setChangeLogs] = useState<ChangeLog[] | undefined>(undefined)

    useEffect(() => {
        changeLogStore.getChangeLogs().then(result => {
            setChangeLogs(result)
        })
    }, [])

    return (
        <NavbarLayout>
            <Announcement
                icon={<FiBook />}
                text="Below you can find the changelog to every single one of our releases."
                iconStyles="bg-blue-500 text-white"
            />
            {changeLogs && (
                <ChangeLogGrid changelogs={changeLogs} />
            )}
        </NavbarLayout>
    )
}

export default ForumIndexPage
