import memoizee from "memoizee"
import {authAPI} from "../api";
import {STAFF_ROLES} from "../constants";

const GROUP_CACHE = 30 * 1000

function enrichGroupWithStaff(group: Group): Group {
    return {
        ...group,
        isStaff: STAFF_ROLES.includes(group.role)
    }
}

async function _fetchAllGroups(): Promise<Record<string, Group>> {
    try {
        const data = await authAPI.get(`/groups`)
        const groups: Record<string, Group> = {}

        data.data.map((group) => {
            groups[group.id] = enrichGroupWithStaff(group)
        })
        return groups
    }
    catch (error) {
        return {}
    }
}

export const fetchAllGroups = memoizee(_fetchAllGroups, {
    maxAge: GROUP_CACHE,
    promise: true,
});

async function _getGroup(id: string): Promise<Group> {
    try {
        const data = await authAPI.get(`/groups/${id}`)
        return enrichGroupWithStaff(data.data)
    }
    catch (error) {
        return undefined
    }
}

export const getGroup = memoizee(_getGroup, {
    maxAge: GROUP_CACHE,
    promise: true,
});
