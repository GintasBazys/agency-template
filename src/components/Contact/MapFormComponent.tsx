"use client";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";

const MapFormComponent = () => {
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        setLoading(true);
        const formData = new FormData(e.currentTarget);

        fetch("https://getform.io/f/bwngndna", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                if(response.ok) {
                    setSuccess("Message received. We will get in touch soon");
                    if (formRef.current) {
                        formRef.current.reset();
                    }   
                } else {
                    setError(
                        "Encountered error while sending the message. Please try again later",
                    );
                }
                setLoading(false);
            })
            .catch(() => {
                setError(
                    "Encountered error while sending the message. Please try again later",
                );
                setLoading(false);
            });
    };

    return (
        <section className="body-font relative w-full">
            <div className="absolute inset-0">
                <iframe
                    width="100%"
                    height="600"
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18453.564976403708!2d25.24694100727848!3d54.67978556463066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd940d554ce5f1%3A0x500d18c70e9dcf0!2sNaujamiestis%2C%20Vilnius%2C%20Vilniaus%20m.%20sav.!5e0!3m2!1slt!2slt!4v1720849319908!5m2!1slt!2slt"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="container px-5 pb-12 pt-24 mx-auto flex">
                <form
                    ref={formRef}
                    action=""
                    method="POST"
                    acceptCharset="UTF-8"
                    onSubmit={(e) => handleSubmit(e)}
                    className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
                >
                    <h2 className="text-lg mb-1 font-medium title-font">
                        Get in touch
                    </h2>
                    <p className="leading-relaxed mb-5">
                        Got a technical issue? Want to send feedback about a
                        beta feature? Need details about our Business plan? Let
                        us know.
                    </p>
                    {success && (
                        <p className="mb-5 text-green-700 text-center font-semibold">
                            {success}
                        </p>
                    )}
                    {error && (
                        <p className="mb-5 text-red-700 text-center font-semibold">
                            {error}
                        </p>
                    )}
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm">
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm">
                            Your comment
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            defaultValue={""}
                        />
                    </div>
                    <button
                        disabled={loading}
                        className="text-white bg-primary hover:bg-transparent hover:text-primary focus:ring-4 border border-primary focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-4 py-2 text-center"
                    >
                        {loading && (
                            <>
                                <svg
                                    aria-hidden="true"
                                    role="status"
                                    className="inline w-4 h-4 me-3 text-primary animate-spin"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="#E5E7EB"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                Sending...
                            </>
                        )}
                        {!loading && <>Send message</>}
                    </button>
                    <p className="text-xs mt-3">
                        We care about the protection of your data.{" "}
                        <Link
                            href="/privacy"
                            className="font-medium underline text-primary hover:text-gradient"
                        >
                            Read our Privacy Policy
                        </Link>
                        .
                    </p>
                </form>
            </div>
        </section>
    );
};

export default MapFormComponent;
