import CardWithHeader from "../common/cards/CardWithHeader";
import StatsCard from "../stats/StatsCard";

const ProfileAuctionStats = ({user}: {user: User}) => {
    return (
        <CardWithHeader title="Auction Stats">
            <div className="flex flex-col gap-4">
                <StatsCard title="Auctions" value={Object.keys(user.auctionUser.auctions).length} />
                <StatsCard title="Bids" value={Object.keys(user.auctionUser.bids).length} />
            </div>
        </CardWithHeader>
    );
}

export default ProfileAuctionStats;
