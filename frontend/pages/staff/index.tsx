import {observer} from "mobx-react-lite";
import React from "react";
import StaffLayout from "../../layout/StaffLayout";
import CardWithHeader from "../../components/common/cards/CardWithHeader";
import SEO from "../../components/SEO";

const StaffPage: NextPageWithLayout = observer(() => {
    return (
        <div>
            <SEO seo={{
                title: `Dashboard`
            }} />
            <CardWithHeader title="Welcome">
                <p>
                    Welcomes to the new WoolGens Staff interface. <br />
                    We currently dont have much to show you on the dashboard, as we are still working on creating new awesome features. <br />
                    Stay tuned for more soon :D
                </p>
                <h2 className="mt-3 text-2xl font-bold">
                    - The WoolGens Dev Team
                </h2>
            </CardWithHeader>
        </div>
    )
})

StaffPage.getLayout = function getLayout(page) {
    return (
        <StaffLayout permission="staff">
            {page}
        </StaffLayout>
    )
}

export default StaffPage
