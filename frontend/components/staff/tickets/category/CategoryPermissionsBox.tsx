import {HiOutlineClipboardCopy} from "react-icons/hi";
import {FC} from "react";
import copyToClipBoard from "../../../../core/helpers/copyToClipBoard";

interface CategoryPermissionBoxProps {
    description: string,
    permission: string,
}

const CategoryPermissionBox: FC<CategoryPermissionBoxProps> = ({ description, permission }) => {
    return (
        <div
            onClick={() => copyToClipBoard(permission)}
            className="group overflow-hidden relative py-6 px-3 text-center bg-dark-light rounded-lg"
        >
            <p className="text-sm text-shark-100">
                {description}
            </p>
            <h1 className="font-bold text-gray-300">
                {permission}
            </h1>
            <div
                className="flex absolute top-0 left-0 justify-center items-center w-full h-full opacity-0 group-hover:opacity-100 transition cursor-pointer bg-dark-light/90">
                <HiOutlineClipboardCopy size="3rem" className="text-gray-400" />
            </div>
        </div>
    )
}

export default CategoryPermissionBox
