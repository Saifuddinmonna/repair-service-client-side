import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer p-10 bg-neutral text-neutral-content rounded-md my-3 shadow-md transition-all duration-300 hover:shadow-xl">
			<div className="max-w-7xl mx-auto w-full">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="space-y-4">
						<h3 className="text-xl font-bold tracking-tight transition-colors duration-300 hover:text-primary">Repair Services</h3>
						<ul className="space-y-3">
							<li>
								<Link to="/services?category=computer" className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
									Computer
								</Link>
							</li>
							<li>
								<Link to="/services?category=laptop" className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
									Laptop
								</Link>
							</li>
							<li>
								<Link to="/services?category=iphone" className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
									Iphone
								</Link>
							</li>
							<li>
								<Link to="/services?category=mac" className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
									Mac
								</Link>
							</li>
							<li>
								<Link to="/services?category=accessories" className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
									Other Computer Accessories
								</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-4">
						<h3 className="text-xl font-bold tracking-tight transition-colors duration-300 hover:text-primary">Servicing</h3>
						<ul className="space-y-3">
							<li>
								<Link to="/about" className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
									About Us
								</Link>
							</li>
							<li>
								<Link to="/contact" className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
									Contact
								</Link>
							</li>
							<li>
								<Link to="/careers" className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
									Jobs
								</Link>
							</li>
							<li>
								<Link to="/press" className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
									Press kit
								</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-4">
						<h3 className="text-xl font-bold tracking-tight transition-colors duration-300 hover:text-primary">Legal</h3>
						<ul className="space-y-3">
							<li>
								<Link to="/terms" className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
									Terms of use
								</Link>
							</li>
							<li>
								<Link to="/privacy" className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
									Privacy policy
								</Link>
							</li>
							<li>
								<Link to="/cookies" className="text-base hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
									Cookie policy
								</Link>
							</li>
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
