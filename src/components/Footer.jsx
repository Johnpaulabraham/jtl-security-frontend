import {
	Facebook,
	Twitter,
	Linkedin,
	Mail,
	Phone,
	MapPin,
	Clock,
} from "lucide-react";
import logo from "../assets/images/JTL-logo.png"; // ✅ Ensure logo path is correct

const Footer = () => {
	return (
		<footer className='bg-[#0A2342] text-gray-300 pt-14'>
			<div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-12 px-6 lg:px-4'>
				{/* 🔹 Company Info */}
				<div>
					<div className='flex items-center mb-4'>
						<img src={logo} alt='JTL Logo' className='h-12 w-auto mr-3' />
						<h2 className='text-white text-2xl font-semibold leading-tight'>
							JTL Security
						</h2>
					</div>
					<p className='text-gray-400 mb-4 text-sm leading-relaxed'>
						RC 1055137 – Licensed provider of professional security solutions
						dedicated to safeguarding lives, properties, and assets.
					</p>
					<p className='flex items-center gap-2 text-sm'>
						<MapPin size={18} className='text-[#1A8EDB]' />
						No 4 Ekukinam Street, Utako (NUJ FCT Council)
					</p>
					<p className='flex items-center gap-2 mt-2 text-sm'>
						<Phone size={18} className='text-[#1A8EDB]' />
						<a
							href='tel:+2347041135965'
							className='hover:text-[#1A8EDB] transition'
						>
							+234 704 113 5965
						</a>
						{/* <span>|</span> */}
						<a
							href='tel:+2348026244674'
							className='hover:text-[#1A8EDB] transition'
						>
							+234 802 624 4674
						</a>
					</p>
					<p className='flex items-center gap-2 mt-2 text-sm'>
						<Mail size={18} className='text-[#1A8EDB]' />
						<a
							href='mailto:jtlsecltd@gmail.com'
							className='hover:text-[#1A8EDB] transition'
						>
							jtlsecltd@gmail.com
						</a>
					</p>
				</div>

				{/* 🔹 Newsletter Subscription */}
				<div>
					<h3 className='text-white text-xl font-semibold mb-4'>
						Stay Updated
					</h3>
					<p className='text-gray-400 text-sm mb-4'>
						Subscribe to get security tips, company news, and service updates.
					</p>
					<form className='flex flex-col sm:flex-row gap-3'>
						<input
							type='email'
							placeholder='Your email address'
							className='w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none border border-gray-300 focus:border-[#1A8EDB] transition'
						/>
						<button
							type='submit'
							className='bg-[#1A8EDB] hover:bg-[#0074C2] px-4 py-2 rounded-lg text-white font-semibold transition'
						>
							Subscribe
						</button>
					</form>
				</div>

				{/* 🔹 Operating Hours & Utility Links */}
				<div>
					<h3 className='text-white text-xl font-semibold mb-4'>
						Operating Hours
					</h3>
					<p className='flex items-center gap-2 text-sm'>
						<Clock size={18} className='text-[#1A8EDB]' /> Mon – Fri: 8:00 AM –
						6:00 PM
					</p>
					<p className='flex items-center gap-2 text-sm mt-1'>
						<Clock size={18} className='text-[#1A8EDB]' /> Sat: 9:00 AM – 2:00
						PM
					</p>
					<p className='flex items-center gap-2 text-sm mt-1'>
						<Clock size={18} className='text-[#1A8EDB]' /> Sun: Closed
					</p>

					{/* Utility Links */}
					<div className='mt-6'>
						<h4 className='text-white text-lg font-semibold mb-3'>
							Quick Links
						</h4>
						<ul className='space-y-2 text-sm'>
							<li>
								<a href='/privacy' className='hover:text-[#1A8EDB]'>
									Privacy Policy
								</a>
							</li>
							<li>
								<a href='/terms' className='hover:text-[#1A8EDB]'>
									Terms of Service
								</a>
							</li>
							<li>
								<a href='/sitemap' className='hover:text-[#1A8EDB]'>
									Site Map
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* 🔹 Google Map Embed */}
				<div>
					<h3 className='text-white text-xl font-semibold mb-4'>
						Our Location
					</h3>
					<iframe
						src='https://www.google.com/maps?q=No+4+Ekukinam+Street,+Utako+(NUJ+FCT+Council)&output=embed'
						width='100%'
						height='200'
						style={{ border: 0 }}
						allowFullScreen=''
						loading='lazy'
						className='rounded-lg shadow-lg'
					></iframe>
				</div>
			</div>

			{/* 🔹 Bottom Bar */}
			<div className='border-t border-gray-700 mt-10 py-6 text-center text-gray-500 text-sm'>
				© {new Date().getFullYear()}{" "}
				<span className='text-white'>JTL Security & Safety Limited</span>. All
				rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
