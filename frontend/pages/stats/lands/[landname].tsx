import NavbarLayout from "../../../layout/NavbarLayout";
import LandProfileContainer from "../../../containers/LandProfileContainer";

const LandProfile: NextPageWithLayout = () => {
    return <LandProfileContainer />
}

LandProfile.getLayout = function getLayout(page) {
    const seo = {
        title: "Land Stats",
        description: "Compare yourself to other lands of the Woolgens community and rise to the top of the leaderboard!"
    }

    return (
        <NavbarLayout seo={seo}>
            {page}
        </NavbarLayout>
    )
}

export default LandProfile
