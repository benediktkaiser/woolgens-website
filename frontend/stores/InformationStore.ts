import {makeAutoObservable, runInAction} from "mobx";
import {getDiscordWidget, getMinecraftServerData} from "../core/information";

class InformationStore {

    onlineDiscord = undefined
    discordInviteLink = ""
    onlineMinecraft = undefined
    onlineUsers: Record<string, string> = {}

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
            this.onlineUsers = minecraftData?.players.uuid || {}
        })
    }

    isUserOnline(username: string): boolean {
        return !!this.onlineUsers[username]
    }
}

const informationStore = new InformationStore()
export default informationStore
