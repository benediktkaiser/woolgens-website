import memoizee from "memoizee"
import {changeLogAPI} from "./api";
import {throwError} from "./error";

const CHANGELOG_CACHE = 30 * 60 * 1000

async function _fetchChangeLogs(): Promise<ChangeLog[]> {
    try {
        const data = await changeLogAPI.get("/changelogs")
        return data.data;
    }
    catch (error) {
        throwError(`Issue retrieving changelogs" - ${error}`)
        return;
    }
}

export const fetchChangeLogs = memoizee(_fetchChangeLogs, {
    maxAge: CHANGELOG_CACHE,
    promise: true,
});
