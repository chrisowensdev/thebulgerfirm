// components/ContactSection.tsx
"use client";
import React from "react";

export default function ContactSection() {
	return (
		<section
			className="relative bg-cover bg-center bg-no-repeat py-16"
			style={{ backgroundImage: "url('/images/footer-background.png')" }}
		>
			<div className="container mx-auto px-6 md:flex md:space-x-12">
				{/* Left: Address & Contact Info */}
				<div className="md:w-1/2 text-white mb-12 md:mb-0">
					<h2 className="text-3xl font-serif mb-4">Contact Us</h2>
					<p className="font-semibold mb-1">Address:</p>
					<address className="not-italic mb-8">
						The Bulger Firm, PLLC
						<br />
						2120 Corporate Square Blvd
						<br />
						Suite 17
						<br />
						Jacksonville, FL 32216
					</address>
					<p className="mb-8">
						<span className="font-semibold">Phone:</span> (904)
						608-3694
					</p>
					<p className="mb-2">
						<span className="font-semibold">Email:</span>{" "}
						contact@thebulgerfirm.com
					</p>
				</div>
				{/* Right: Contact Form */}
				<div className="md:w-1/2 bg-white rounded-lg shadow p-6">
					<form className="space-y-4">
						<div>
							<label
								htmlFor="name"
								className="block font-sans text-gray-700 mb-1"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-brand focus:border-brand"
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block font-sans text-gray-700 mb-1"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-brand focus:border-brand"
							/>
						</div>
						<div>
							<label
								htmlFor="subject"
								className="block font-sans text-gray-700 mb-1"
							>
								Subject
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-brand focus:border-brand"
							/>
						</div>
						<div>
							<label
								htmlFor="message"
								className="block font-sans text-gray-700 mb-1"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows={4}
								className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-brand focus:border-brand"
							/>
						</div>
						<button type="submit" className="btn-primary w-full">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
