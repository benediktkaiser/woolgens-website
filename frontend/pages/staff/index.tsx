import StaffLayout from "../../layout/StaffLayout";
import StaffToolbar from "../../components/staff/layout/StaffToolbar";
import {useRouter} from "next/router";

const StaffIndex = () => {
    const router = useRouter()

    return (
        <StaffLayout>
            <StaffToolbar title="Staff Page" pathName={router ? router.pathname : ""} />
            Test
        </StaffLayout>
    )
}

export default StaffIndex
