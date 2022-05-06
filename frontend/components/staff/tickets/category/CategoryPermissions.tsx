import {FC} from "react";
import CategoryPermissionBox from "./CategoryPermissionsBox";

interface GeneralCategorySettingsProps {
    category: TicketCategory
}

const CategoryPerms: FC<GeneralCategorySettingsProps> = ({category}) => {
    return (
        <div>
            <div className="flex justify-between items-center pb-2 mb-4 border-b-2 border-shark-400">
                <h1 className="text-3xl font-bold">
                    Permissions
                </h1>
            </div>
            <p className="text-lg text-gray-500">
                Permissions are automatically generated based on the category id. You can use the following permissions
                to give groups access to this ticket category.
            </p>
            <div className="grid grid-cols-3 gap-3 my-5">
                <CategoryPermissionBox
                    description="Create a new ticket in this category."
                    permission={`web.tickets.category.${category.id}.create`}
                />
                <CategoryPermissionBox
                    description="View tickets submitted by other users in this category."
                    permission={`web.tickets.category.${category.id}.view`}
                />
                <CategoryPermissionBox
                    description="Respond and manage tickets submitted by other users in this category."
                    permission={`web.tickets.category.${category.id}.manage`}
                />
            </div>
        </div>
    )
}

export default CategoryPerms
