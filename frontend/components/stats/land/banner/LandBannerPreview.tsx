import LandBannerPattern from "./LandBannerPattern";
import {BANNER_BASE_COLOR_CODES} from "../../../../core/banner";

const LandBannerPreview = ({banner}: {banner: Banner}) => {
    return (
        <div className="relative h-[156px] w-[80px]" style={{backgroundColor: BANNER_BASE_COLOR_CODES[banner.baseColor]}}>
            {banner.patterns.map(((bannerLayer, index) => <LandBannerPattern key={index} pattern={bannerLayer.pattern} color={bannerLayer.color} />))}
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'url("/assets/banner-overlay.png")' }} />
        </div>
    )
}

export default LandBannerPreview
