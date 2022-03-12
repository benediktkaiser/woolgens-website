import Bust from "../../common/Bust";
import styles from "../../../styles/modules/landsTop.module.css"
import Link from "next/link"
import {formatMoney} from "../../../core/formatters";

declare interface LandTopBoxProps {
    land: Land
    place: number
}

const LandTopBox = ({land, place}: LandTopBoxProps) => {

    if (!land) {
        return <div />
    }

    return (
        <Link href={`/stats/lands/${land.id}`} passHref={true}>
            <a className={`${place === 1 && styles.Place1} ${place === 2 && styles.Place2} ${place === 3 && styles.Place3} group cursor-pointer overflow-hidden px-5 pt-5 h-44 bg-dark-light/50 rounded-2xl hover:scale-105 transition duration-150`}>
                <div className="flex justify-between items-start">
                    <div className="flex items-center">
                        <div className={`${styles.glow} transition duration-150 mt-1.5`}>
                            <Bust uuid={land.owner.uuid} size={150}/>
                        </div>
                        <div className="ml-2">
                            <h1 className="text-3xl font-semibold text-green-600">
                                {land.name}
                            </h1>
                            <h2>
                                {formatMoney(land.bank.balance)} $
                            </h2>
                        </div>
                    </div>
                    <div>
                        <h1 className={`text-3xl font-semibold ${styles.textColor}`}>
                            # {place}
                        </h1>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default LandTopBox
