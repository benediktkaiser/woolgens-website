import {auctionAPI} from "./api";

export async function getAuctionUserByUUID(uuid: string): Promise<AuctionUser> {
    try {
        const data = await auctionAPI.get(`/users/${uuid}`);
        return data.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
