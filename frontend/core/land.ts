import {landAPI} from "./api";

export async function getAllLands(): Promise<Land[]> {
    try {
        const allLands = await landAPI.get('/lands')
        return allLands.data;
    }
    catch (error) {
        console.error(error)
        throw new Error('Issue retrieving lands.')
    }
}

export async function getLandByName(name: string): Promise<Land> {
    try {
        const loweredName = name.toLowerCase();
        const land = await landAPI.get(`/lands/${loweredName}`)
        const orderedMembers = getSortedUserList(land.data)
        return {
            ...land.data,
            owner: {
                ...land.data.owner,
                landRole: {
                    name: "Owner",
                    priority: -1,
                    color: "#AA0000",
                }
            },
            orderedMembers
        };
    }
    catch (error) {
        console.error(error)
        throw new Error(`Issue retrieving land "${name}"`)
    }
}

function getSortedUserList(land: Land): LandMember[] {
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

    return members
}
