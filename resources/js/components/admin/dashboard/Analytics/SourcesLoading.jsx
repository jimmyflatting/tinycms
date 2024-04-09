import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function SourcesLoading() {
    return (
        <>
            <div className="flex flex-col space-y-3">
                <Skeleton className="w-full h-[20px] rounded-full" />
                <Skeleton className="w-full h-[20px] rounded-full" />
                <Skeleton className="w-full h-[20px] rounded-full" />
                <Skeleton className="w-full h-[20px] rounded-full" />
                <Skeleton className="w-full h-[20px] rounded-full" />
            </div>
        </>
    );
}
