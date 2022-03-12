import FooterLink from "./FooterLink";
import {CONTACT_EMAIL} from "../../../core/constants";

const Footer = () => {
    return (
        <footer className="mt-10 w-full bg-dark-light">
            <div className="container lg:flex justify-between items-center py-6 mx-auto text-center lg:text-left">
                <div className="mb-4 lg:mb-0">
                    <h1 className="text-lg">Copyright © Woolgens 2022.</h1>
                    <h4 className="text-sm text-gray-400">Design by tsuukii</h4>
                </div>
                <ul className="flex justify-center items-center">
                    <FooterLink text="Imprint" link="/legal" />
                    <FooterLink text="Server Status" link="https://status.woolgens.net/status" />
                    <FooterLink text="Contact" link={`mailto:${CONTACT_EMAIL}?subject=Contact Inquiry`} />
                </ul>
            </div>
        </footer>
    )
}

export default Footer
