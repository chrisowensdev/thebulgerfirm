import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import DetailSection1 from "@/components/DetailSection1";
import DetailSection2 from "@/components/DetailSection2";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import ReviewsSection from "@/components/ReviewsSection";

export default function HomePage() {
	return (
		<>
			<Hero />
			<InfoSection />
			<DetailSection1 />
			<DetailSection2 />
			<ReviewsSection />
			<AwardsSection />
			<ContactSection />
		</>
	);
}
