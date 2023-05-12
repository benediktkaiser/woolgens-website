import BasicCard from "../../../common/cards/BasicCard";
import LandBannerPreview from "./LandBannerPreview";

const demoBanner: Banner = {
    baseColor: "RED",
    patterns: [
        {
            color: "WHITE",
            pattern: "FLOWER",
        }
    ],
}

const LandBannerEditor = () => {
    return (
        <BasicCard withTabs={true}>
            <div className="flex gap-4 items-center">
                <LandBannerPreview banner={demoBanner} />
            </div>
        </BasicCard>
    )
}

export default LandBannerEditor
