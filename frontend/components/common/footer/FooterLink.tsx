import {FC} from "react";
import Link from "next/link"

declare interface FooterLinkProps {
    text: string,
    link: string,
}

const FooterLink: FC<FooterLinkProps> = ({text, link}) => {
    return (
        <Link href={link} passHref={true}>
            <a className="py-3 px-2 md:px-6 hover:bg-dark rounded-2xl cursor-pointer text-md">
                {text}
            </a>
        </Link>
    )
}

export default FooterLink
