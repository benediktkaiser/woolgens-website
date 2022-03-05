import {makeAutoObservable, runInAction} from "mobx";
import {getDiscordWidget, getMinecraftServerData} from "../core/information";
import {toast} from "react-toastify";

class InformationStore {

    discordInviteLink = ""
    onlineDiscord = undefined
    onlineMinecraft = undefined

    constructor() {
        makeAutoObservable(this)
    }

    async updateData() {
        const discordWidget = await getDiscordWidget(process.env.NEXT_PUBLIC_DISCORD_SERVER_ID)
        const minecraftData = await getMinecraftServerData(process.env.NEXT_PUBLIC_MINECRAFT_IP)

        runInAction(() => {
            this.onlineDiscord = discordWidget.presence_count || 0
            this.discordInviteLink = discordWidget.instant_invite || "#"
            this.onlineMinecraft = minecraftData?.players.online || 0
        })
    }

    copyIP() {
        navigator.clipboard.writeText(process.env.NEXT_PUBLIC_MINECRAFT_IP).then(
            () => toast.success("The IP was copied to your clipboard!")
        )
    }
}

const informationStore = new InformationStore()
export default informationStore
