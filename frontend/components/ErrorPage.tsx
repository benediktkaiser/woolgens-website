import {BaseButton} from "./common/BaseButton";
import Link from "next/link";
import React, {FC} from "react";
import {useRouter} from "next/router";

interface ErrorPageProps {
    title: string
    subtitle: string
}

const ErrorPage: FC<ErrorPageProps> = ({title, subtitle}) => {
    const router = useRouter()

    return (
        <div className="flex justify-center items-center text-center">
            <div>
                <h1 className="mt-20 text-5xl md:text-7xl lg:text-8xl font-bold">
                    {title}
                </h1>
                <h2>
                    {subtitle}
                </h2>
                <div className="flex gap-4 justify-center items-center mt-5">
                    <BaseButton type="dark" onClick={() => router.back()}>
                        One page Back
                    </BaseButton>
                    <Link href="/" passHref={true}>
                        <a>
                            <BaseButton type="primary">
                                Back to home
                            </BaseButton>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
