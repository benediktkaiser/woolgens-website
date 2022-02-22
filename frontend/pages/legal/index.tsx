import NavbarLayout from "../../layout/NavbarLayout";
import React from "react";
import BasicCard from "../../components/common/cards/BasicCard";
import Link from "next/link"
import SEO from "../../components/SEO";

const Legal: NextPageWithLayout = () => {
    return (
        <article className="mx-auto prose prose-invert max-w-[100%]">
            <SEO seo={{
                title: "Legal",
                description: "Woolgens legal documents about our website and shop."
            }} />
            <h1>
                Imprint
            </h1>
            <address>
                Name Lastname <br/>
                Line 1 <br/>
                Line 2 <br/>
                Telephone Number<br />
                admin@woolgens.net
            </address>
        </article>
    )
}

Legal.getLayout = function getLayout(page) {
    return (
        <NavbarLayout>
            <div className="flex flex-col lg:flex-row gap-4 items-start w-full">
                <BasicCard width="w-full lg:w-80">
                    <div className="flex flex-col gap-2 w-full">
                        <Link href="/legal" passHref={true}>
                            <a>
                                <div className="p-4 w-full bg-dark-light rounded-xl">
                                    Imprint
                                </div>
                            </a>
                        </Link>
                        <Link href="/legal/privacy" passHref={true}>
                            <a>
                                <div className="p-4 w-full hover:bg-dark-light rounded-xl">
                                    Privacy
                                </div>
                            </a>
                        </Link>
                        <Link href="/legal/terms" passHref={true}>
                            <a>
                                <div className="p-4 w-full hover:bg-dark-light rounded-xl">
                                    Terms & Conditions
                                </div>
                            </a>
                        </Link>
                        <Link href="/legal/store" passHref={true}>
                            <a>
                                <div className="p-4 w-full hover:bg-dark-light rounded-xl">
                                    Store conditions
                                </div>
                            </a>
                        </Link>
                        <Link href="/legal/cookies" passHref={true}>
                            <a>
                                <div className="p-4 w-full hover:bg-dark-light rounded-xl">
                                    Cookie Policy
                                </div>
                            </a>
                        </Link>
                    </div>
                </BasicCard>
                <BasicCard width="w-full">
                    <div className="w-full">
                        {page}
                    </div>
                </BasicCard>
            </div>
        </NavbarLayout>
    )
}

export default Legal
