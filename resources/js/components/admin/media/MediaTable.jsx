import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

export default function MediaTable() {
    const { toast } = useToast();
    const [media, setMedia] = useState([]);

    useEffect(() => {
        axios
            .get("/api/media")
            .then((response) => {
                setMedia(response.data);
            })
            .catch((error) => {
                // Handle error
                console.error("Error fetching media:", error);
            });
    }, []);

    console.log(media);

    const deleteMedia = (id) => {
        axios
            .delete(`/api/media/${id}`)
            .then(() => {
                setMedia(media.filter((m) => m.id !== id));
                toast({
                    title: "Mediafilen har raderats",
                    description: "Mediafilen har raderats",
                    variant: "success",
                });
            })
            .catch((error) => {
                toast({
                    title: "Något gick snett",
                    description:
                        "Det gick inte att radera mediafilen. Försök igen.",
                    variant: "destructive",
                });
                console.error("Error deleting media:", error);
            });
    };

    return (
        <>
            <div className="">
                <input
                    type="text"
                    className="w-full rounded-md border-gray-200"
                    placeholder="Sök efter media"
                />
            </div>
            <div className="medialabel grid grid-cols-3 gap-3">
                {media.length > 0 &&
                    media.map((mediaItem) => (
                        <MediaCard
                            key={mediaItem.id}
                            media={mediaItem}
                            onDelete={deleteMedia}
                        />
                    ))}
            </div>
        </>
    );
}

function MediaCard({ media, onDelete }) {
    const handleDelete = () => {
        onDelete(media.id);
    };

    return (
        <Card>
            <CardHeader>
                <img
                    className="img-fluid rounded-md"
                    src={media.file_url}
                    alt={media.file_name}
                />
                <CardTitle>{media.title}</CardTitle>
                <CardDescription>{media.description}</CardDescription>
                <CardDescription>{media.file_name}</CardDescription>
            </CardHeader>
            <CardContent>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Ta bort</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Är du säker?</DialogTitle>
                            <DialogDescription>
                                Den här åtgärden kan inte ångras. Den kommer att
                                permanent radera mediafilen.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button onClick={(e) => handleDelete()}>
                                    Ta bort
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    );
}
