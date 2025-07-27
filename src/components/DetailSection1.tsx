// components/DetailSection1.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DetailSection1() {
	return (
		<section>
			<div className="container flex flex-col md:flex-row items-center py-12">
				{/* Text Side */}
				<motion.div
					className="w-full md:w-1/2 md:px-6 px-3 mt-8 md:mt-0"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
				>
					<h2 className="text-3xl font-serif text-gray-900 mb-1">
						Family Law
					</h2>
					<h3 className="text-xl font-serif text-gray-900 mb-4">
						Your Family. Your Future.
					</h3>
					<p className="text-md text-gray-700 mb-4">
						Family comes first. Every family is unique, and every
						family law case requires a unique approach. There is no
						&ldquo;one size fits all&ldquo; solution and we&apos;ll
						work to find the best solution for you. You can count on
						communication with your attorney and being kept informed
						throughout your case. We make decisions with you, not
						for you, and make sure you know your case is as much our
						priority as it is yours.
					</p>
				</motion.div>
				{/* Image Side */}
				<motion.div
					className="w-full md:w-1/2 md:px-6 px-3 overflow-hidden"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<Image
						src="/images/detail-section-1.png"
						alt="Consultation scene"
						width={600}
						height={400}
						className="object-cover w-full h-full"
						priority
					/>
				</motion.div>
			</div>
		</section>
	);
}
