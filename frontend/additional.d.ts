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
}

declare interface MinecraftUser extends User {
    joined: number, // is a timestamp
    stats: Record<string, number>,
    land: Land | string,
    seasons: Record<string, MinecraftUserSeason>
}

declare interface MinecraftUserSeason {
    balance: number,
    level: number,
    exp: number,
    stats: Record<string, number>,
    crates: Record<string, number>,
}

declare interface Group {
    name: string,
    color: string, // is a hex color code
    priority: number,
    permissions: string[]
}

/* Land Types */
declare interface Land {
    name: string,
    registered: number, // is a timestamp
    owner: LandMember,
    bank: LandBank
    upgrades: Record<string, number>
    members: Record<string, LandMember>
    roles: Record<string, LandRole>
}

declare interface LandMember extends User {
    role: LandRole | string,
}

declare interface LandRole {
    name: string,
    color: string,
    priority: number,
    permissions: string[],
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
