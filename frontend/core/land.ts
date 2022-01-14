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
        return land.data;
    }
    catch (error) {
        console.error(error)
        throw new Error(`Issue retrieving land "${name}"`)
    }
}
