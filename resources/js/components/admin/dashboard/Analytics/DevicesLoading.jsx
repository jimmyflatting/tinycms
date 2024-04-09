import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function DevicesLoading() {
    return (
        <>
            <Skeleton className="w-80 h-80 rounded-full" />
        </>
    );
}
