"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const links = [
		{ href: "/practice-areas", label: "Practice Areas" },
		{ href: "/attorneys", label: "Attorneys" },
		{ href: "/client-resources", label: "Client Resources" },
		{ href: "/contact", label: "Contact" },
	];

	// Close mobile menu on outside click
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				mobileOpen &&
				menuRef.current &&
				!menuRef.current.contains(event.target as Node)
			) {
				setMobileOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, [mobileOpen]);

	return (
		<header className="bg-white shadow fixed w-full z-20">
			<nav className="container flex items-center justify-between py-4 px-6">
				<Link
					href="/"
					className="text-xl font-serif text-gray-900 flex items-center"
				>
					<Image
						src="/images/logo.png"
						alt="The Bulger Firm Logo"
						width={50}
						height={50}
					/>
					<p className="uppercase text-black">The Bulger Firm</p>
				</Link>

				{/* Desktop Menu */}
				<ul className="hidden md:flex space-x-6">
					{links.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className="font-sans text-[#788bae] hover:text-brand transition-colors duration-200"
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-[#788bae] focus:outline-none"
					onClick={() => setMobileOpen(!mobileOpen)}
					aria-label="Toggle navigation"
				>
					{mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
				</button>
			</nav>

			{/* Mobile Menu Panel */}
			<div
				ref={menuRef}
				className={`md:hidden bg-white shadow overflow-hidden transition-[max-height] duration-300 ease-in-out ${
					mobileOpen ? "max-h-96" : "max-h-0"
				}`}
			>
				<ul className="flex flex-col items-center space-y-2 px-6 py-4">
					{links.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								onClick={() => setMobileOpen(false)}
								className="block font-sans text-[#788bae] hover:text-brand transition-colors duration-200"
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
}
