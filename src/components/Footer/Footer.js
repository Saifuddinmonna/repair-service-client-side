import React from "react";

const Footer = () => {
	return (
		<footer className="footer p-10 bg-neutral text-neutral-content rounded-md my-3 shadow-md transition-all duration-300 hover:shadow-xl">
			<div className="max-w-7xl mx-auto w-full">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="space-y-4">
						<h3 className="text-xl font-bold tracking-tight transition-colors duration-300 hover:text-primary">Repair Services</h3>
						<ul className="space-y-3">
							<li><a className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Computer</a></li>
							<li><a className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Laptop</a></li>
							<li><a className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Iphone</a></li>
							<li><a className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Mac</a></li>
							<li><a className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Other Computer Accessories</a></li>
						</ul>
					</div>
					<div className="space-y-4">
						<h3 className="text-xl font-bold tracking-tight transition-colors duration-300 hover:text-primary">Servicing</h3>
						<ul className="space-y-3">
							<li><a className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">About ME</a></li>
							<li><a className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Contact</a></li>
							<li><a className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Jobs</a></li>
							<li><a className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Press kit</a></li>
						</ul>
					</div>
					<div className="space-y-4">
						<h3 className="text-xl font-bold tracking-tight transition-colors duration-300 hover:text-primary">Legal</h3>
						<ul className="space-y-3">
							<li><a className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Terms of use</a></li>
							<li><a className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Privacy policy</a></li>
							<li><a className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Cookie policy</a></li>
						</ul>
					</div>
				</div>
				<div className="mt-8 pt-8 border-t border-gray-700 text-center">
					<p className="text-sm text-gray-400">© 2024 Repair Services. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
