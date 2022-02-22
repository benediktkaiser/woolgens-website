// This is for global types we need in the project
// You can create types and access them in the entire project

/* Users */
declare interface InitialUser {
    uuid: string,
    name: string,
}

declare interface User extends InitialUser {
    webUser?: WebUser,
    minecraftUser: MinecraftUser
}

declare interface WebInitialUser extends  InitialUser {
    group: string,
    joined: number, // is a timestamp
    notifications: WebNotification[],
}

declare interface WebUser extends WebInitialUser {
    group?: Group,
}

declare interface MinecraftInitialUser extends InitialUser {
    joined: number
    lastJoined: number
    stats: Record<string, number>
    land: string
    seasons: Record<string, MinecraftUserSeason>
    booster: Record<FarmingSkills, number>
    badges: Badge[]
}

declare interface MinecraftUser extends MinecraftInitialUser {
    land?: Land,
}

declare interface MinecraftUserSeason {
    balance: number,
    level: number,
    exp: number,
    stats: Record<string, number>,
    crates: Record<string, number>,
    skills: Skills
    quests: {
        finished: Record<string, string>,
        selected: Record<string, string>
    }
}

declare interface Badge {
    color: MinecraftColorCode,
    title: string,
    description: string
    received: number
}

declare type MinecraftColorCode = "&1" | "&2" | "&3" | "&4" | "&5" | "&6" | "&7" | "&8" | "&9" | "&a" | "&b" | "&c" | "&d" | "&e" | "&f"

declare interface Group {
    name: string,
    color: string, // is a hex color code
    role: string,
    isStaff?: boolean,
    permissions: string[]
}

declare interface WebNotification {
    title: string,
    message: string,
    link: string,
    type: "success" | "warning" | "danger" | "info",
}

/* Skills */
declare interface Skills {
    basePoints: number,
    farmingPoints: number,
    base: Record<BaseSkills, number>
    farming: Record<FarmingSkills, number>
}

declare type BaseSkills = "DEFENSE" | "ATTACK"
declare type FarmingSkills = "MINING" | "AGRICULTURE" | "FISHING" | "LUMBERJACK"

/* Lands */
declare interface InitialLand {
    name: string
    id: string
    registered: number // is a timestamp
    owner: InitialUser
    bank: LandBank
    upgrades: Record<string, number>
    members: Record<string, LandMember>
    invites: string[]
    roles: Record<string, LandRole>
}

declare interface Land extends  InitialLand {
    owner: LandMember
    members: LandMember[]
}

declare interface LandMember extends InitialUser {
    role?: string,
    landRole: LandRole,
}

declare interface LandRole {
    name: string,
    color: string,
    priority: number,
    defaultRole?: boolean,
    permissions?: string[],
}

declare interface LandBank {
    balance: number,
    transactions: LandTransaction[],
}

declare interface LandTransaction {
    amount: number,
    issuer: string,
    timestamp: number,
    type: 'DEPOSIT' | 'WITHDRAW' | 'BUY_UPGRADE',
}

declare interface ChangeLog {
    id: string,
    title: string,
    author: string,
    timestamp: number,
    lines: string[],
}

type NextPageWithLayout = import("NextPage").NextPage & {
    getLayout?: (page: import("react").ReactElement) => import("react").ReactNode
}

type AppPropsWithLayout = import("next/app").AppProps & {
    Component: NextPageWithLayout
}

declare interface TemporaryToken {
    id: string,
    type: "register",
    ttl: number,
    data: Record<string, string>
}

declare interface AutoCompleteListItem {
    id: number,
    name: string,
    type: "PLAYER" | "LAND"
}
