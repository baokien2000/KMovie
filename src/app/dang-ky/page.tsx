import React from "react";

export default async function Page() {
    console.log("Im still SSR");
    return (
        <main className="p-6 py-4 space-y-3">
            <div>Dang ky</div>
        </main>
    );
}
