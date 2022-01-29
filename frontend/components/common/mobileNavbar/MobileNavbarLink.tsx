import Link from "next/link"
import {FC} from "react";

declare interface MobileNavbarLinkProps {
    title: string
    link: string
}

const MobileNavbarLink: FC<MobileNavbarLinkProps> = ({title, link}) => {
    return (
        <Link href={link} passHref={true}>
            <a className="p-4 w-full text-center bg-dark-light rounded-2xl">
                {title}
            </a>
        </Link>
    )
}

export default MobileNavbarLink
