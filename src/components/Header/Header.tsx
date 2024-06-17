"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const Header = () => {
    const pathname = usePathname();

    const navbarEl = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (navbarEl.current) {
            navbarEl.current.classList.add("hidden");
        }
    }, [pathname]);

    const handleMenu = () => {
        if (navbarEl.current?.classList.contains("hidden")) {
            navbarEl.current.classList.remove("hidden");
        } else {
            navbarEl.current?.classList.add("hidden");
        }
    };

    return (
        <header className="sticky w-full z-20 top-0 start-0 ">
            <nav className="bg-white border-b border-gray-200 shadow-xl">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <Image
                            src="/logos/logo_black.svg"
                            width={120}
                            height={60}
                            className="h-auto"
                            alt="Logo"
                            title="Logo"
                            priority
                        />
                    </Link>
                    <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
                        <Link
                            href="/contact"
                            className="text-white bg-primary hover:bg-transparent hover:text-primary focus:ring-4 border border-primary focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                        >
                            Contact us
                        </Link>
                        <button
                            onClick={handleMenu}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                            aria-controls="navbar-sticky"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
                        id="navbar-sticky"
                        ref={navbarEl}
                    >
                        <ul className="flex flex-col p-4 px-0 lg:p-0 mt-4 lg:mt-0 font-medium border border-gray-100 rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:border-0 lg:bg-white">
                            <li>
                                <Link
                                    href="/services"
                                    className="block py-2 px-3 lg:rounded border-b border-primary lg:border-0 text-primary  hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/aboutus"
                                    className="block py-2 px-3 text-primary lg:rounded border-b border-primary lg:border-0 hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="block py-2 px-3 text-primary lg:rounded border-b border-primary lg:border-0 hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/faq"
                                    className="block py-2 px-3 text-primary lg:rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0 "
                                >
                                    Faq
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
