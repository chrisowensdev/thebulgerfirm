// components/InfoSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DetailSection2() {
	return (
		<section className="bg-[#788bae]">
			<div className="container flex flex-col md:flex-row items-center py-12">
				{/* Image Side */}
				<motion.div
					className="w-full md:w-1/2 md:px-6 px-3 overflow-hidden"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<Image
						src="/images/detail-section-2.png"
						alt="Consultation scene"
						width={500}
						height={300}
						className="object-cover w-full h-full"
						priority
					/>
				</motion.div>

				{/* Text Side */}
				<motion.div
					className="w-full md:w-1/2 md:px-6 px-3 mt-8 md:mt-0"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
				>
					<h2 className="text-3xl font-serif text-white mb-4">
						Personal Injury
					</h2>
					<p className="text-md text-white">
						An accident can change your life in an instant. An
						injury can affect your ability to work, pay your bills
						or just live your life the way you want. When that
						happens, you may feel overwhelmed and alone. If
						you&apos;ve been injured in an accident, whether you
						were the driver, passenger or customer in an Uber, Lyft
						or rideshare service, you have rights. Our attorneys
						stand up for your rights every step of the way to get
						you the recovery you deserve.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
