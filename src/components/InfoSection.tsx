// components/InfoSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InfoSection() {
	return (
		<section className="container flex flex-col md:flex-row items-center py-12 bg-[#788bae]">
			{/* Image Side */}
			<motion.div
				className="w-full md:w-1/2 overflow-hidden"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<Image
					src="/images/info-section.png"
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
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
			>
				<h2 className="text-3xl font-serif text-white mb-4">
					Our Practice
				</h2>
				<p className="text-sm text-white">
					The Bulger Firm is committed to our clients facing divorce,
					child custody, child support, modifications, paternity and
					domestic violence and personal injury cases. Our practice is
					dedicated to aggressive representation and customer service
					that our clients expect and deserve when it comes to what
					matters most to them.
				</p>
				<br />
				<p className="text-sm text-white">
					We understand that your case may leave you feeling
					overwhelmed. Our goal is to keep you informed so that you
					will have confidence in our full support from the beginning
					to the end of your case and beyond. With our knowledge,
					skill and expertise in the law, we work tirelessly to secure
					the best outcomes for our clients to ensure that our
					clients&apos; best interests are protected, both now and in
					the future.
				</p>
				<br />
				<p className="text-sm text-white">
					If you&apos;re facing a family law or personal injury case,
					you may feel alone-- but you&apos;re not. At The Bulger
					Firm, our family stands with yours.
				</p>
			</motion.div>
		</section>
	);
}
