import {HiLockOpen, HiLockClosed} from "react-icons/hi"
import {FC} from "react";

interface TicketCategoryButton {
    category: TicketCategory
    select: (categoryId: string) => void,
}

const TicketCategoryButton: FC<TicketCategoryButton> = ({category, select}) => {
    return (
        <div onClick={() => select(category.id)} className="flex justify-between items-center py-2 px-4 w-full hover:bg-dark-light rounded-lg cursor-pointer">
            <div>
                <h1 className="text-lg text-gray-200">
                    {category.name}
                </h1>
                <h3 className="text-sm text-gray-500">
                    {category.id}
                </h3>
            </div>
            {category.active ? (
                <HiLockOpen className="text-3xl text-green-500" />
            ): (
                <HiLockClosed className="text-3xl text-red-500" />
            )}
        </div>
    )
}

export default TicketCategoryButton
