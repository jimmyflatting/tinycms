import PageForm from "@/components/admin/pages/PageForm";
import Auth from "@/layouts/Auth";
import Card from "@/layouts/components/Card";

export default function Create({ ...props }) {
    return (
        <Auth>
            <Card>
                <PageForm props={props} />
            </Card>
        </Auth>
    );
}
