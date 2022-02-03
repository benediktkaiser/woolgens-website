import NavbarLayout from "../layout/NavbarLayout";
import {BaseButton} from "../components/common/BaseButton";
import {useRouter} from "next/router";
import Link from "next/link"
import React from "react";

const NotFound: NextPageWithLayout = () => {
    const router = useRouter()

    return (
        <div className="flex justify-center items-center text-center">
            <div>
                <h1 className="mt-20 text-5xl md:text-7xl lg:text-9xl font-bold">
                    Not found
                </h1>
                <h2>
                    We could not find this page!
                </h2>
                <div className="flex gap-4 justify-center items-center mt-5">
                    <BaseButton type="dark" onClick={() => router.back()}>
                        One page Back
                    </BaseButton>
                    <Link href="/" passHref={true}>
                        <BaseButton type="primary">
                            Back to home
                        </BaseButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}

NotFound.getLayout = function getLayout(page) {
    const seo = {
        title: "Not found",
    }
    return (
        <NavbarLayout seo={seo}>
            {page}
        </NavbarLayout>
    )
}

export default NotFound
