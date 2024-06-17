"use client";
import { useEffect } from "react";

export default function YouTube({ id }: { id: string }) {
    useEffect(() => {
        import("@justinribeiro/lite-youtube");
    }, []);
    return (
        <div>
            {/* @ts-ignore */}
            <lite-youtube videoid={id} autoload nocookie></lite-youtube>
        </div>
    );
}
