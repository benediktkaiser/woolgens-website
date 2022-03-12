import Link from "next/link"

interface TabProps {
    title: string,
    link?: string,
    disabled?: boolean,
    active?: boolean,
    onClick?: () => void,
}

const Tab = ({title, link, disabled, active, onClick}: TabProps) => {
    if (active) {
        return (
            <li className="mr-2">
                <a className="inline-block px-4 pt-3 pb-2 font-medium text-center text-gray-200 bg-dark-light rounded-t-lg cursor-pointer">
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

    if (link) {
        return (
            <li className="mr-2">
                <Link href={link} passHref={true}>
                    <a className="inline-block px-4 pt-3 pb-2 font-medium text-center text-gray-400 hover:text-gray-200 bg-shark-700 hover:bg-dark-light rounded-t-lg cursor-pointer">
                        {title}
                    </a>
                </Link>
            </li>
        )
    }

    return (
        <li className="mr-2" onClick={onClick}>
            <a className="inline-block px-4 pt-3 pb-2 font-medium text-center text-gray-400 hover:text-gray-200 bg-shark-700 hover:bg-dark-light rounded-t-lg cursor-pointer">
                {title}
            </a>
        </li>
    )
}
export default Tab
