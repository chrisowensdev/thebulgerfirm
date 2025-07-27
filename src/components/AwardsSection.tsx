// components/AwardsSection.tsx
"use client";
import React from "react";

const awards = [
	{
		link: "https://www.avvo.com/attorneys/32216-fl-cydney-bulger-4233805.html",
		img: "/svg/cydney-2019.svg",
		title: "Clients Choice Award 2019",
	},
	{
		link: "https://www.avvo.com/attorneys/32216-fl-dustin-bulger-4581577.html",
		img: "/svg/dustin-client-reviews.svg",
		title: "Client Reviews",
	},
	{
		link: "https://www.avvo.com/attorneys/32216-fl-cydney-bulger-4233805.html",
		img: "/svg/cydney-2018.svg",
		title: "Clients Choice Award 2018",
	},
	{
		link: "https://profiles.superlawyers.com/florida/jacksonville/lawyer/cydney-bulger/2e570e07-45b6-4917-a845-8cfbdbc5d297.html",
		img: "/images/super-lawyers-award.png",
		title: "Rising Stars Cydney Bulger",
	},
];

export default function AwardsSection() {
	return (
		<section className="bg-gray-50 py-12">
			<div className="container mx-auto px-6 md:flex md:items-center md:space-x-12">
				{/* Awards Grid */}
				<div className="grid grid-cols-2 gap-4 md:w-1/2">
					{awards.map(({ link, img, title }, idx) => (
						<a
							key={idx}
							className="flex flex-col items-center p-4 bg-white rounded-lg shadow"
							target="_blank"
							href={link}
						>
							<img src={img} alt={title} />
						</a>
					))}
				</div>
				{/* Embedded Video */}
				<div className="mt-8 md:mt-0 md:w-1/2">
					<div className="relative w-full pb-[56.25%]">
						<iframe
							src="https://www.youtube.com/embed/bugC5uoQ6L4"
							title="The Bulger Firm"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							className="absolute top-0 left-0 w-full h-full rounded-lg shadow"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
