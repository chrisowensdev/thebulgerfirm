// components/Hero.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section className="container flex flex-col md:flex-row items-center bg-white pt-20">
			{/* Text Side */}
			<motion.div
				className="w-full md:w-1/2 lg:px-15 px-6 py-12"
				initial={{ x: -50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
					Experienced Legal Guidance, Every Step of the Way
				</h1>
				<p className="text-lg text-gray-700 mb-6">
					At The Bulger Firm, our team of dedicated attorneys defend
					your rights with compassion and expertise.
				</p>

				{/* Animated Button */}
				<a href="/contact" className="inline-block btn-primary">
					Get Your Free Consultation
				</a>
			</motion.div>

			{/* Image Side with fade-in */}
			<motion.div
				className="w-full md:w-1/2 overflow-hidden"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: "easeInOut" }}
			>
				<Image
					src="/images/hero-image.png"
					alt="Attorney consultation"
					width={800}
					height={600}
					className="object-cover w-full h-full"
					priority
				/>
			</motion.div>
		</section>
	);
}
