import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function PagesLoading() {
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
