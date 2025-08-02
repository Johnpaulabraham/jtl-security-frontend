import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/JTL-logo.png";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{ name: "Home", path: "/" },
		{ name: "About Us", path: "/about" },
		{ name: "Services", path: "/services" },
		{ name: "Training", path: "/training" },
		{ name: "Careers", path: "/careers" },
		{ name: "Contact", path: "/contact" },
	];

	return (
		<nav className='bg-white shadow-md fixed w-full top-0 left-0 z-50'>
			<div className='container mx-auto px-6 lg:px-12 flex items-center justify-between py-4'>
				{/* 🔹 Logo Section */}
				<Link to='/' className='flex items-center gap-2'>
					<img src={logo} alt='JTL Logo' className='h-10 w-auto' />
					<span className='text-[#0A2342] font-bold text-xl tracking-wide'>
						JTL Security
					</span>
				</Link>

				{/* 🔹 Desktop Links */}
				<ul className='hidden md:flex gap-8 text-[#0A2342] font-medium'>
					{navLinks.map((link) => (
						<li key={link.name}>
							<Link
								to={link.path}
								className='hover:text-[#1A8EDB] transition-colors duration-300'
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>

				{/* 🔹 Contact CTA Button (Desktop Only) */}
				<div className='hidden md:flex'>
					<Link
						to='/contact'
						className='bg-[#1A8EDB] hover:bg-[#0074C2] text-white px-5 py-2 rounded-lg font-semibold shadow transition'
					>
						Request a Quote
					</Link>
				</div>

				{/* 🔹 Mobile Menu Toggle */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='md:hidden text-[#0A2342] focus:outline-none'
				>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* 🔹 Mobile Menu Dropdown */}
			{isOpen && (
				<div className='md:hidden bg-white shadow-lg border-t'>
					<ul className='flex flex-col px-6 py-4 space-y-4 text-[#0A2342] font-medium'>
						{navLinks.map((link) => (
							<li key={link.name}>
								<Link
									to={link.path}
									className='block hover:text-[#1A8EDB] transition'
									onClick={() => setIsOpen(false)}
								>
									{link.name}
								</Link>
							</li>
						))}
						{/* CTA inside mobile menu */}
						<li>
							<Link
								to='/contact'
								className='block text-center bg-[#1A8EDB] hover:bg-[#0074C2] text-white px-4 py-2 rounded-lg font-semibold shadow transition'
								onClick={() => setIsOpen(false)}
							>
								Request a Quote
							</Link>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
