import Script from "next/script";

export default function YouTube({ id }: { id: string }) {
    return (
        <div>
            <Script
                type="module"
                src="https://unpkg.com/@justinribeiro/lite-youtube/lite-youtube.js"
                strategy="lazyOnload"
            />
            <lite-youtube videoid={id} autoload nocookie></lite-youtube>
        </div>
    );
}
