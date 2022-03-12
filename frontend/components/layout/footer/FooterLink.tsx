import Link from "next/link"

declare interface FooterLink {
    text: string,
    link: string,
}

const FooterLink = ({text, link}: FooterLink) => {
    return (
        <li>
            <Link href={link} passHref={true}>
                <a className="py-3 px-2 md:px-6 hover:bg-dark rounded-2xl cursor-pointer text-md">
                    {text}
                </a>
            </Link>
        </li>
    )
}

export default FooterLink
