import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Contact = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const validateForm = () => {
		if (!formData.name.trim()) {
			toast.error("Please enter your name");
			return false;
		}
		if (!formData.email.trim()) {
			toast.error("Please enter your email");
			return false;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			toast.error("Please enter a valid email address");
			return false;
		}
		if (!formData.subject.trim()) {
			toast.error("Please enter a subject");
			return false;
		}
		if (!formData.message.trim()) {
			toast.error("Please enter your message");
			return false;
		}
		return true;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		if (!validateForm()) {
			return;
		}

		setLoading(true);

		try {
			const response = await fetch("https://assignment-11-server-site-smoky.vercel.app/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (data.acknowledged) {
				toast.success("Message sent successfully! We'll get back to you soon.");
				// Reset form
				setFormData({
					name: "",
					email: "",
					phone: "",
					subject: "",
					message: "",
				});
				// Optional: Navigate back to home after successful submission
				setTimeout(() => {
					navigate("/");
				}, 2000);
			} else {
				toast.error("Failed to send message. Please try again.");
			}
		} catch (error) {
			console.error("Error sending message:", error);
			toast.error("An error occurred. Please try again later.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Contact Us - Tech Repair Services</title>
				<link rel="canonical" href="http://mysite.com/contact" />
			</Helmet>

			{/* Hero Section */}
			<div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
				<div className="max-w-7xl mx-auto px-4">
					<h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
						Contact Us
					</h1>
					<p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
						Get in touch with us for any questions about our services or to schedule a repair.
					</p>
				</div>
			</div>

			{/* Contact Information and Form Section */}
			<div className="max-w-7xl mx-auto px-4 py-16">
				<div className="grid md:grid-cols-2 gap-12">
					{/* Contact Information */}
					<div className="space-y-8">
						<div className="bg-white rounded-xl shadow-lg p-8">
							<h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
							
							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="text-blue-600 text-2xl">📍</div>
									<div>
										<h3 className="font-semibold text-gray-800">Address</h3>
										<p className="text-gray-600">123 Tech Street, Digital City, DC 12345</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="text-blue-600 text-2xl">📞</div>
									<div>
										<h3 className="font-semibold text-gray-800">Phone</h3>
										<p className="text-gray-600">+1 (555) 123-4567</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="text-blue-600 text-2xl">✉️</div>
									<div>
										<h3 className="font-semibold text-gray-800">Email</h3>
										<p className="text-gray-600">support@techrepair.com</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="text-blue-600 text-2xl">⏰</div>
									<div>
										<h3 className="font-semibold text-gray-800">Business Hours</h3>
										<p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
										<p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
										<p className="text-gray-600">Sunday: Closed</p>
									</div>
								</div>
							</div>
						</div>

						{/* Social Media Links */}
						<div className="bg-white rounded-xl shadow-lg p-8">
							<h2 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h2>
							<div className="flex space-x-4">
								<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600 transition-colors">📱</a>
								<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600 transition-colors">💻</a>
								<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600 transition-colors">📸</a>
								<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600 transition-colors">🐦</a>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className="bg-white rounded-xl shadow-lg p-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
									Your Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									required
									placeholder="Enter your name"
								/>
							</div>

							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
									Email Address
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									required
									placeholder="Enter your email"
								/>
							</div>

							<div>
								<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
									Phone Number
								</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									placeholder="Enter your phone number (optional)"
								/>
							</div>

							<div>
								<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
									Subject
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									required
									placeholder="Enter message subject"
								/>
							</div>

							<div>
								<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									rows="4"
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									required
									placeholder="Enter your message"
								></textarea>
							</div>

							<button
								type="submit"
								disabled={loading}
								className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 ${
									loading ? "opacity-70 cursor-not-allowed" : ""
								}`}
							>
								{loading ? (
									<div className="flex items-center justify-center">
										<div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
										Sending...
									</div>
								) : (
									"Send Message"
								)}
							</button>
						</form>
					</div>
				</div>
			</div>

			{/* Map Section */}
			<div className="max-w-7xl mx-auto px-4 pb-16">
				<div className="bg-white rounded-xl shadow-lg p-8">
					<h2 className="text-2xl font-bold text-gray-800 mb-6">Our Location</h2>
					<div className="aspect-w-16 aspect-h-9">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1645564750981!5m2!1sen!2sbd"
							width="100%"
							height="450"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							title="Our Location"
							className="rounded-lg"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact; 