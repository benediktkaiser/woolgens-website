import NavbarLayout from "../layout/NavbarLayout";
import {BaseButton} from "../components/common/BaseButton";
import {useRouter} from "next/router";
import Link from "next/link"
import React from "react";

const Error = () => {
    const router = useRouter()

    return (
        <div className="flex justify-center items-center text-center">
            <div>
                <h1 className="mt-20 text-5xl md:text-7xl lg:text-8xl font-bold">
                    An error occurred!
                </h1>
                <h2>
                    This page could not be loaded!
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

Error.getLayout = function getLayout(page) {
    const seo = {
        title: "Error",
    }

    return (
        <NavbarLayout seo={seo}>
            {page}
        </NavbarLayout>
    )
}

export default Error
