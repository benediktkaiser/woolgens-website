import StaffLayout from "../../layout/StaffLayout";
import StaffToolbar from "../../components/staff/layout/StaffToolbar";
import {useRouter} from "next/router";
import React from "react";

const StaffIndex: NextPageWithLayout = () => {
    const router = useRouter()

    return (
        <div>
            <StaffToolbar title="Staff Page" pathName={router ? router.pathname : ""} />
            Test
        </div>
    )
}

StaffIndex.getLayout = function getLayout(page) {
    return (
        <StaffLayout>
            {page}
        </StaffLayout>
    )
}

export default StaffIndex
