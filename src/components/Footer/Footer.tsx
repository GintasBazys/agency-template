import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bg-secondary py-8 px-4 lg:p-14 w-full">
			<div className="container mx-auto max-w-7xl">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<div>
						<Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
							<Image
								src="/logos/logo_main.svg"
								width={200}
								height={60}
								alt="Logo"
								title="Logo"
							/>
						</Link>
						<p className="text-white font-medium my-5">
							Partner with our experts to enhance your digital footprint.
							<br /> From SEO to social media, we&apos;ve got you covered.
						</p>
						<form action="#" className=" max-w-md">
							<label	htmlFor="email" className="text-sm text-white inline-block mb-2">Sign up to our newsletter:</label>
							<div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
								<div className="relative w-full">
									<label
										htmlFor="email"
										className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
										Email address
									</label>
									<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
										<svg
											className="w-5 h-5 text-gray-500 dark:text-gray-400"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
											<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
										</svg>
									</div>
									<input
										className="block p-3 pl-10 w-full text-sm text-white rounded-lg border sm:rounded-none sm:rounded-l-lg bg-transparent border-white sm:border-r-0 placeholder-gray-400"
										placeholder="Enter your email"
										type="email"
										id="email"
										required
									/>
								</div>
								<div>
									<button
										type="submit"
										className="py-3 px-5 w-full text-sm text-center text-gradient font-bold rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
										Subscribe
									</button>
								</div>
							</div>
							<div className="mx-auto max-w-screen-sm text-sm text-left text-gray-300">
								We care about the protection of your data.{" "}
								<Link href="/privacy" className="font-medium underline text-white hover:text-gradient">
									Read our Privacy Policy
								</Link>
								.
							</div>
						</form>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
						<div className="flex flex-col">
							<strong className=" text-white font-bold text-base mb-2 w-fit">
								RESOURCES
								<hr />
							</strong>
							<Link href="/services" className="text-white text-base hover:text-gradient">
								Services
							</Link>
							<Link href="/aboutus" className="text-white text-base hover:text-gradient">
								About us
							</Link>
							<Link href="/blog" className="text-white text-base hover:text-gradient">
								Blog
							</Link>
							<Link href="/faq" className="text-white text-base hover:text-gradient">
								FAQ
							</Link>
							<Link href="/contact" className="text-white text-base hover:text-gradient">
								Contact us
							</Link>
						</div>
						<div className="flex flex-col mt-4 sm:mt-0">
							<strong className=" text-white font-bold text-base mb-2 w-fit">
								FOLLOW US <hr />
							</strong>
							<Link
								href="https://facebook.com"
								target="_blank"
								rel="nofollow"
								className="text-white text-base hover:text-gradient">
								Facebook
							</Link>
							<Link
								href="https://facebook.com"
								target="_blank"
								rel="nofollow"
								className="text-white text-base hover:text-gradient">
								Linkedin
							</Link>
						</div>
						<div className="flex flex-col mt-4 sm:mt-6 xl:mt-0">
							<strong className=" text-white font-bold text-base mb-2 w-fit">
								LEGAL <hr />
							</strong>
							<Link href="/privacy" target="_blank" className="text-white text-base hover:text-gradient">
								Privacy
							</Link>
						</div>
					</div>
				</div>
				<hr className="mt-8" />
				<small className="text-white mt-8 inline-block">© 2024. All rights reserved</small>
			</div>
		</footer>
	);
};

export default Footer;
