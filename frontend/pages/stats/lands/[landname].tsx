import NavbarLayout from "../../../layout/NavbarLayout";
import LandProfileContainer from "../../../containers/LandProfileContainer";
import SEO from "../../../components/SEO";

const LandProfile: NextPageWithLayout = ({ landname }) => {
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

export async function getServerSideProps(context) {
    const landname = context.params['landname']

    // Pass data to the page via props
    return { props: { landname: landname } }
}


export default LandProfile
