import styles from "../../../../styles/modules/landBanner.module.css"
import {BANNER_PATTERN_POSITIONS, BANNER_COLOR_POSITIONS, BannerPattern, BannerColor} from "../../../../core/banner";

const LandBannerPattern = ({pattern, color}: { pattern: BannerPattern, color: BannerColor }) => {

    return (
        <div className={`absolute top-0 left-0 ${styles.pattern}`} style={{backgroundPosition: `${BANNER_PATTERN_POSITIONS[pattern]} ${BANNER_COLOR_POSITIONS[color]}`}}/>
    )
}

export default LandBannerPattern
