import NavbarLayout from "../../../layout/NavbarLayout";
import LandProfileContainer from "../../../containers/LandProfileContainer";

const LandProfile: NextPageWithLayout = () => {
    return <LandProfileContainer />
}

LandProfile.getLayout = function getLayout(page) {
    return (
        <NavbarLayout>
            {page}
        </NavbarLayout>
    )
}

export default LandProfile
