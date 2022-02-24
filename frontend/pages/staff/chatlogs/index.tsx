import {observer} from "mobx-react-lite";
import React from "react";
import StaffLayout from "../../../layout/StaffLayout";
import CardWithHeader from "../../../components/common/cards/CardWithHeader";

const StaffPage: NextPageWithLayout = observer(() => {
    return (
        <div>
            <CardWithHeader title="Welcome">
                Welcomes to the WoolGens Staff interface.
            </CardWithHeader>
        </div>
    )
})

StaffPage.getLayout = function getLayout(page) {
    return (
        <StaffLayout permission="web.chatlogs.view">
            {page}
        </StaffLayout>
    )
}

export default StaffPage
