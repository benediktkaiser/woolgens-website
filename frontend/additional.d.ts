// This is for global types we need in the project
// You can create types and access them in the entire project

/* User Types */
declare interface User {
    uuid: string,
    name: string,
}

declare interface WebUser extends User {
    group: Group | string,
    joined: number, // is a timestamp
    notifications: WebNotification[],
}

declare interface MinecraftUser extends User {
    joined: number, // is a timestamp
    stats: Record<string, number>,
    land?: Land,
    seasons: Record<string, MinecraftUserSeason>,
    booster: Record<FarmingSkills, number>
}

declare interface FullUser {
    webUser: WebUser,
    minecraftUser: MinecraftUser
}

declare interface MinecraftUserSeason {
    balance: number,
    level: number,
    exp: number,
    stats: Record<string, number>,
    crates: Record<string, number>,
    skills: Skills
}

declare interface Group {
    name: string,
    color: string, // is a hex color code
    priority: number,
    permissions: string[]
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

/* Land Types */
declare interface Land {
    name: string,
    id: string,
    registered: number, // is a timestamp
    owner: LandMember,
    bank: LandBank
    upgrades: Record<string, number>
    members: Record<string, LandMember>
    invites: string[]
    roles: Record<string, LandRole>
    chunks: LandChunk[]
    orderedMembers?: LandMember[]
}

declare interface LandChunk {
    x: number,
    z: number,
}

declare interface LandMember extends User {
    role: string,
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

declare interface WebNotification {
    title: string,
    message: string,
    link: string,
    type: "success" | "warning" | "danger" | "info",
}
