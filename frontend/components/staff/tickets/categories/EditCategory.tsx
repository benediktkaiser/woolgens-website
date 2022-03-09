import React, {FC, useState} from "react";
import GeneralCategorySettings from "./GeneralCategorySettings";
import FormBuilder from "./FormBuilder";
import Tab from "../../../common/Tab";
import CategoryPerms from "./CategoryPerms";

interface EditCategoryProps {
    category: TicketCategory
}

const EditCategory: FC<EditCategoryProps> = ({category}) => {
    const [page, setPage] = useState('settings')

    return (
        <div className="flex flex-col gap-2">
            <div>
                <ul className="flex flex-wrap">
                    <Tab title="Settings" active={page === "settings"} onClick={() => setPage('settings')} />
                    <Tab title="Form Builder" active={page === "builder"} onClick={() => setPage('builder')} />
                    <Tab title="Permissions" active={page === "perms"} onClick={() => setPage('perms')} />
                </ul>

                {page === "settings" && <GeneralCategorySettings category={category} />}
                {page === "builder" && <FormBuilder />}
                {page === "perms" && <CategoryPerms category={category} />}
            </div>
        </div>
    )
}

export default EditCategory
