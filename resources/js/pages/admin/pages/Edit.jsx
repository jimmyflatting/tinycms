import PageForm from "@/components/admin/pages/PageForm";
import Auth from "@/layouts/Auth";
import Card from "@/layouts/components/Card";

export default function Edit({ ...props }) {
    return (
        <Auth user={props.auth.user}>
            <Card>
                <PageForm props={props} />
            </Card>
        </Auth>
    );
}
