import {landAPI} from "./api";
import {throwError} from "./error";

function enrichLandMembersWithRoles(land: InitialLand): Land {
    const landRoles = land.roles
    const members: LandMember[] = []

    const memberObjects = Object.entries(land.members).sort(([, firstMember], [, secondMember]) => {
        const role1 = landRoles[firstMember.role]
        const role2 = landRoles[secondMember.role]

        if (role1.priority > role2.priority) {
            return -1
        } else if (role2.priority > role1.priority) {
            return 1
        } else {
            return 0
        }
    })

    memberObjects.map(([,result]) => {
        members.push({
            ...result,
            landRole: landRoles[result.role]
        })
    })

    return {
        ...land,
        owner: {
            ...land.owner,
            landRole: {
                name: "Owner",
                priority: -1,
                color: "#AA0000",
            }
        },
        bank: {
            ...land.bank,
            transactions: land.bank.transactions.reverse()
        },
        members
    }
}

export async function getLandByName(name: string): Promise<Land | undefined> {
    try {
        const loweredName = name.toLowerCase();
        const land = await landAPI.get(`/lands/${loweredName}`)
        return enrichLandMembersWithRoles(land.data)
    }
    catch (error) {
        console.error(`Issue retrieving the land "${name}" - ${error}`);
        return undefined;
    }
}

export async function fetchLandNames(): Promise<Record<string, string>> {
    try {
        const data = await landAPI.get(`/lands?small=true`)
        const map = {}
        data.data.forEach((result) => {
            map[result.name] = result.name
        })
        return map
    }
    catch (error) {
        throwError(`Issue retrieved all lands" - ${error}`)
        return;
    }
}

export async function fetchLandsSorted(sorted: string, pageIndex: number, pageSize: number): Promise<Land[]> {
    try {
        const data = await landAPI.get(`/lands?sorted=${sorted}&pageindex=${pageIndex}&pagesize=${pageSize}`)
        return data.data
    }
    catch (error) {
        throwError(`Issue retrieved lands sorted by "${sorted}" from page ${pageIndex} with ${pageSize} entries" - ${error}`)
        return;
    }
}
