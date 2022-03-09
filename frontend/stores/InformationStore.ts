import {makeAutoObservable, runInAction} from "mobx";
import {getDiscordWidget, getMinecraftServerData, getVotePartyStatus} from "../core/information";
import copyToClipBoard from "../core/helpers/copyToClipBoard";

class InformationStore {

    discordInviteLink = ""
    onlineDiscord = undefined
    onlineMinecraft = undefined
    votePartyStatus: VotePartyStatus = {
        count: 0,
        maxCount: 100
    }

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

    async updateVotePartyStatus() {
        const votePartyStatus = await getVotePartyStatus()
        runInAction(() => {
            this.votePartyStatus = votePartyStatus
        })
    }

    copyIP() {
        copyToClipBoard(process.env.NEXT_PUBLIC_MINECRAFT_IP, "The IP was copied to your clipboard!")
    }
}

const informationStore = new InformationStore()
export default informationStore
