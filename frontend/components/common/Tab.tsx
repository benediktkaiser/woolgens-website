import {FC} from "react";
import Link from "next/link"

interface TabProps {
    title: string,
    link?: string,
    disabled?: boolean,
    active?: boolean,
}

const Tab: FC<TabProps> = ({title, link = "#", disabled, active}) => {
    if (active) {
        return (
            <li className="mr-2">
                <a className="inline-block px-4 pt-3 pb-2 font-medium text-center text-gray-200 bg-dark-light rounded-t-lg">
                    {title}
                </a>
            </li>
        )
    }

    if (disabled) {
        return (
            <li className="mr-2">
                <a className="inline-block px-4 pt-3 pb-2 font-medium text-center text-gray-400 bg-shark-700 rounded-t-lg cursor-not-allowed">
                    {title}
                </a>
            </li>
        )
    }

    return (
        <li className="mr-2">
            <Link href={link} passHref={true}>
                <a className="inline-block px-4 pt-3 pb-2 font-medium text-center text-gray-400 hover:text-gray-200 bg-shark-700 hover:bg-dark-light rounded-t-lg">
                    {title}
                </a>
            </Link>
        </li>
    )
}
export default Tab
