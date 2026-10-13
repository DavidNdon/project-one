import AppLayout from "@/layouts/AppLayout";
import { Head } from "@inertiajs/react";

export default function Welcome() {
    return (
        <AppLayout>
            <Head title="Welcome" />

            <div className="p-6">
                <h1 className="text-2xl font-bold">Welcome to my app!</h1>
            </div>
        </AppLayout>
    );
}