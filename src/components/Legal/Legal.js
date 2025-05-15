import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Legal = () => {
	const location = useLocation();
	const path = location.pathname;

	const getTitle = () => {
		switch (path) {
			case "/terms":
				return "Terms of Use";
			case "/privacy":
				return "Privacy Policy";
			case "/cookies":
				return "Cookie Policy";
			default:
				return "Legal";
		}
	};

	const getContent = () => {
		switch (path) {
			case "/terms":
				return (
					<>
						<h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Acceptance of Terms</h2>
						<p className="text-lg text-gray-700 leading-relaxed mb-6">
							By accessing and using Tech Repair Services, you accept and agree to be bound by the terms and 
							provision of this agreement.
						</p>

						<h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Use License</h2>
						<p className="text-lg text-gray-700 leading-relaxed mb-6">
							Permission is granted to temporarily download one copy of the materials (information or software) 
							on Tech Repair Services's website for personal, non-commercial transitory viewing only.
						</p>

						<h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Disclaimer</h2>
						<p className="text-lg text-gray-700 leading-relaxed mb-6">
							The materials on Tech Repair Services's website are provided on an 'as is' basis. Tech Repair 
							Services makes no warranties, expressed or implied, and hereby disclaims and negates all other 
							warranties including, without limitation, implied warranties or conditions of merchantability, 
							fitness for a particular purpose, or non-infringement of intellectual property or other 
							violation of rights.
						</p>
					</>
				);
			case "/privacy":
				return (
					<>
						<h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Information We Collect</h2>
						<p className="text-lg text-gray-700 leading-relaxed mb-6">
							We collect information that you provide directly to us, including but not limited to your name, 
							email address, phone number, and device information.
						</p>

						<h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. How We Use Your Information</h2>
						<p className="text-lg text-gray-700 leading-relaxed mb-6">
							We use the information we collect to provide, maintain, and improve our services, to communicate 
							with you, and to comply with legal obligations.
						</p>

						<h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Information Sharing</h2>
						<p className="text-lg text-gray-700 leading-relaxed mb-6">
							We do not share your personal information with third parties except as described in this privacy 
							policy.
						</p>
					</>
				);
			case "/cookies":
				return (
					<>
						<h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. What Are Cookies</h2>
						<p className="text-lg text-gray-700 leading-relaxed mb-6">
							Cookies are small text files that are placed on your computer or mobile device when you visit 
							our website. They are widely used to make websites work more efficiently and provide a better 
							user experience.
						</p>

						<h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. How We Use Cookies</h2>
						<p className="text-lg text-gray-700 leading-relaxed mb-6">
							We use cookies to understand how you use our website and to improve your experience. This includes 
							remembering your preferences and settings, analyzing how you use our website, and personalizing 
							content.
						</p>

						<h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Managing Cookies</h2>
						<p className="text-lg text-gray-700 leading-relaxed mb-6">
							You can control and/or delete cookies as you wish. You can delete all cookies that are already 
							on your computer and you can set most browsers to prevent them from being placed.
						</p>
					</>
				);
			default:
				return null;
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 py-16">
			<Helmet>
				<meta charSet="utf-8" />
				<title>{getTitle()} - Tech Repair Services</title>
				<link rel="canonical" href={`http://mysite.com${path}`} />
			</Helmet>

			<div className="max-w-7xl mx-auto px-4">
				<div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
					<h1 className="text-4xl font-bold text-center mb-8 text-gray-800">{getTitle()}</h1>
					<div className="prose max-w-none">
						{getContent()}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Legal; 