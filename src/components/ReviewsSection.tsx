// components/ReviewsSection.tsx
"use client";
import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
	{
		name: "Jeff",
		text: "Incredible law firm! responsive, compassionate and reasonably priced. I felt like a got great value and the results of my case exceeded my wildest expectations. Thank you",
	},
	{
		name: "Rhonda",
		text: "Hiring a lawyer for my case was an important decision that I spent a great deal of time deciding on, and I am so happy I chose the Bulgers for my divorce. they took care of everything from start to finish and I am pleased with the outcome of my case and everything about their service",
	},
	{
		name: "Rivers",
		text: "The attorneys of the Bulger Firm really care about their clients! I absolutely would hire Dustin again for any legal matter, he rules.",
	},
];

export default function ReviewsSection() {
	return (
		<section className="bg-white py-12">
			<h2 className="text-3xl font-serif text-gray-900 text-center mb-8">
				Client Reviews
			</h2>
			<div className="container mx-auto grid gap-8 px-6 md:grid-cols-3">
				{reviews.map((review, idx) => (
					<div key={idx} className="bg-gray-50 rounded-lg shadow p-6">
						<div className="flex items-center mb-4">
							{Array.from({ length: 5 }).map((_, i) => (
								<FaStar
									key={i}
									className="text-yellow-400 mr-1"
								/>
							))}
						</div>
						<p className="text-gray-700 mb-4">“{review.text}”</p>
						<p className="text-gray-900 font-semibold">
							— {review.name}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
