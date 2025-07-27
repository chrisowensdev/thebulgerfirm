export default function Footer() {
	return (
		<footer className="bg-gray-100 mt-16">
			<div className="container mx-auto py-8 text-center text-sm text-gray-600">
				© {new Date().getFullYear()} The Bulger Firm. All rights
				reserved.
			</div>
			<div className="container mx-auto text-center text-xs text-gray-600 pb-6">
				All materials have been prepared for general information
				purposes only to permit you to learn more about our firm, our
				services and the experience of our attorneys. The information
				presented is not legal advice, is not to be acted on as such,
				does not create an attorney-client relationship and is subject
				to change without notice.
			</div>
		</footer>
	);
}
