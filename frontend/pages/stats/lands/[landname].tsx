import NavbarLayout from "../../../layout/NavbarLayout";
import LandProfileContainer from "../../../containers/LandProfileContainer";
import {useRouter} from "next/router";
import SEO from "../../../components/SEO";

const LandProfile: NextPageWithLayout = () => {
    const router = useRouter()
    const {landname} = router.query

    return (
        <div>
            <SEO seo={{
                title: `${landname}`,
                description: "Land",
                imageSRC: `/api/previews/land/${landname}`}} />
            <LandProfileContainer />
        </div>
    )
}

LandProfile.getLayout = function getLayout(page) {
    return (
        <NavbarLayout>
            {page}
        </NavbarLayout>
    )
}

export default LandProfile
