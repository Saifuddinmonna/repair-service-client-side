import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
	return (
		<div className="min-h-screen bg-gray-50 py-16">
			<Helmet>
				<meta charSet="utf-8" />
				<title>About Us - Tech Repair Services</title>
				<link rel="canonical" href="http://mysite.com/about" />
			</Helmet>

			<div className="max-w-7xl mx-auto px-4">
				<div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
					<h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About Us</h1>
					
					<div className="prose max-w-none">
						<p className="text-lg text-gray-700 leading-relaxed mb-6">
							Welcome to Tech Repair Services, your trusted partner in electronic device repair and maintenance. 
							With years of experience in the industry, we've built a reputation for excellence, reliability, and 
							customer satisfaction.
						</p>

						<h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Mission</h2>
						<p className="text-lg text-gray-700 leading-relaxed mb-6">
							Our mission is to provide high-quality repair services for all types of electronic devices, 
							ensuring that our customers can continue using their devices without interruption. We believe 
							in sustainable technology solutions and aim to extend the life of electronic devices through 
							professional repair services.
						</p>

						<h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Expertise</h2>
						<p className="text-lg text-gray-700 leading-relaxed mb-6">
							Our team of certified technicians specializes in:
						</p>
						<ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
							<li>Computer and Laptop Repairs</li>
							<li>iPhone and Smartphone Repairs</li>
							<li>Mac and Apple Device Services</li>
							<li>Data Recovery</li>
							<li>Hardware Upgrades</li>
							<li>Software Troubleshooting</li>
						</ul>

						<h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Why Choose Us</h2>
						<div className="grid md:grid-cols-2 gap-6 mb-8">
							<div className="bg-gray-50 p-6 rounded-lg">
								<h3 className="text-xl font-semibold mb-3 text-gray-800">Expert Technicians</h3>
								<p className="text-gray-700">Our team consists of certified professionals with years of experience.</p>
							</div>
							<div className="bg-gray-50 p-6 rounded-lg">
								<h3 className="text-xl font-semibold mb-3 text-gray-800">Quality Service</h3>
								<p className="text-gray-700">We use only genuine parts and follow industry best practices.</p>
							</div>
							<div className="bg-gray-50 p-6 rounded-lg">
								<h3 className="text-xl font-semibold mb-3 text-gray-800">Fast Turnaround</h3>
								<p className="text-gray-700">Most repairs are completed within 24-48 hours.</p>
							</div>
							<div className="bg-gray-50 p-6 rounded-lg">
								<h3 className="text-xl font-semibold mb-3 text-gray-800">Warranty</h3>
								<p className="text-gray-700">All our repairs come with a 90-day warranty.</p>
							</div>
						</div>

						<h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Commitment</h2>
						<p className="text-lg text-gray-700 leading-relaxed">
							We are committed to providing the best possible service to our customers. Our goal is to ensure 
							that every device we repair leaves our shop in perfect working condition. We take pride in our 
							work and stand behind every repair we perform.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About; 