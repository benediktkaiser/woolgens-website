import FooterLink from "./FooterLink";

const Footer = () => {
    return (
        <footer className="mt-10 w-full bg-dark-light">
            <div className="container lg:flex justify-between items-center py-6 mx-auto text-center lg:text-left">
                <div className="mb-4 lg:mb-0">
                    <h1 className="text-lg">Copyright © Woolgens 2022.</h1>
                    <h4 className="text-sm text-gray-400">Design by tsuukii</h4>
                </div>
                <ul className="flex justify-center items-center">
                    <FooterLink text="Imprint" link="/imprint" />
                    <FooterLink text="Terms and conditions" link="/terms" />
                    <FooterLink text="Contact" link="/support" />
                </ul>
            </div>
        </footer>
    )
}

export default Footer
