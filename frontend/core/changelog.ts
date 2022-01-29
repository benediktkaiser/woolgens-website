import {changeLogAPI} from "./api";
import {throwError} from "./error";

export async function getChangeLogs(): Promise<ChangeLog[]> {
    try {
        const data = await changeLogAPI.get("/changelogs")
        return data.data;
    }
    catch (error) {
        throwError(`Issue retrieving changelogs" - ${error}`)
        return;
    }
}
