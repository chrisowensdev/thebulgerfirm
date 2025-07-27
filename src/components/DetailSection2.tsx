// components/InfoSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DetailSection2() {
	return (
		<section className="container flex flex-col md:flex-row items-center py-12 bg-[#788bae]">
			{/* Image Side */}
			<motion.div
				className="w-full md:w-1/2 overflow-hidden"
				initial={{ x: -100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<Image
					src="/images/detail-section-2.png"
					alt="Consultation scene"
					width={600}
					height={400}
					className="object-cover w-full h-full"
					priority
				/>
			</motion.div>

			{/* Text Side */}
			<motion.div
				className="w-full md:w-1/2 px-6 mt-8 md:mt-0"
				initial={{ x: 100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
			>
				<h2 className="text-3xl font-serif text-white mb-4">
					Personal Injury
				</h2>
				<p className="text-sm text-white">
					An accident can change your life in an instant. An injury
					can affect your ability to work, pay your bills or just live
					your life the way you want. When that happens, you may feel
					overwhelmed and alone. If you've been injured in an
					accident, whether you were the driver, passenger or customer
					in an Uber, Lyft or rideshare service, you have rights. Our
					attorneys stand up for your rights every step of the way to
					get you the recovery you deserve.
				</p>
			</motion.div>
		</section>
	);
}
