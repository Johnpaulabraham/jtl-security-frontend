import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
	FaShieldAlt,
	FaUserShield,
	FaBuilding,
	FaVideo,
	FaFireExtinguisher,
	FaCarAlt,
	FaAward,
	FaClock,
	FaUsers,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import SecAss from "../assets/images/SecAss.jpg";
import Footer from "../components/Footer";
import John from "../assets/images/John.png";

const testimonials = [
	{
		name: "Sen. Blessing O.",
		role: "Business Owner",
		text: "JTL Security team provided outstanding security solutions for my company. Their professionalism in every aspect of their service. I highly recommend them to anyone seeking trusted and effective security.",
		image: "https://randomuser.me/api/portraits/women/44.jpg",
	},
	{
		name: "John Paul Abraham",
		role: "CTO",
		text: "JTL Security is a game changer - highly trained, proactive, and always ahead in addressing potential risks, giving us true peace of mind. I trust JTL completely to keep our people, property, and operations secure.",
		image: John,
	},
	{
		name: "Jonathan Joy",
		role: "Event Organizer",
		text: "The professionalism, reliability, and attention to detail they bring make them more than just a security provider - they are true partners in protection.",
		image: "https://randomuser.me/api/portraits/women/68.jpg",
	},
];

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<AboutSection />
			{/* ==== CORE SERVICES SECTION ==== */}
			<section className='bg-[#0B1B2B] py-20 px-6'>
				<div className='max-w-7xl mx-auto text-center'>
					<h2 className='text-3xl md:text-4xl font-bold text-white mb-12'>
						Our Core Services
					</h2>

					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
						{/* Service Card */}
						<div className='group bg-[#11263C] rounded-xl p-8 shadow-lg hover:shadow-2xl hover:bg-[#142C45] transition-all duration-300'>
							<div className='mb-4 flex justify-center'>
								<FaShieldAlt className='text-5xl text-[#F5B800] group-hover:scale-110 transition-transform duration-300' />
							</div>
							<h3 className='text-lg font-semibold text-white group-hover:text-[#F5B800] transition-colors duration-300'>
								24/7 Armed Security
							</h3>
						</div>

						<div className='group bg-[#11263C] rounded-xl p-8 shadow-lg hover:shadow-2xl hover:bg-[#142C45] transition-all duration-300'>
							<div className='mb-4 flex justify-center'>
								<FaUserShield className='text-5xl text-[#F5B800] group-hover:scale-110 transition-transform duration-300' />
							</div>
							<h3 className='text-lg font-semibold text-white group-hover:text-[#F5B800] transition-colors duration-300'>
								Executive Protection
							</h3>
						</div>

						<div className='group bg-[#11263C] rounded-xl p-8 shadow-lg hover:shadow-2xl hover:bg-[#142C45] transition-all duration-300'>
							<div className='mb-4 flex justify-center'>
								<FaBuilding className='text-5xl text-[#F5B800] group-hover:scale-110 transition-transform duration-300' />
							</div>
							<h3 className='text-lg font-semibold text-white group-hover:text-[#F5B800] transition-colors duration-300'>
								Corporate Security
							</h3>
						</div>

						<div className='group bg-[#11263C] rounded-xl p-8 shadow-lg hover:shadow-2xl hover:bg-[#142C45] transition-all duration-300'>
							<div className='mb-4 flex justify-center'>
								<FaVideo className='text-5xl text-[#F5B800] group-hover:scale-110 transition-transform duration-300' />
							</div>
							<h3 className='text-lg font-semibold text-white group-hover:text-[#F5B800] transition-colors duration-300'>
								CCTV Monitoring
							</h3>
						</div>

						<div className='group bg-[#11263C] rounded-xl p-8 shadow-lg hover:shadow-2xl hover:bg-[#142C45] transition-all duration-300'>
							<div className='mb-4 flex justify-center'>
								<FaFireExtinguisher className='text-5xl text-[#F5B800] group-hover:scale-110 transition-transform duration-300' />
							</div>
							<h3 className='text-lg font-semibold text-white group-hover:text-[#F5B800] transition-colors duration-300'>
								Fire Safety
							</h3>
						</div>

						<div className='group bg-[#11263C] rounded-xl p-8 shadow-lg hover:shadow-2xl hover:bg-[#142C45] transition-all duration-300'>
							<div className='mb-4 flex justify-center'>
								<FaCarAlt className='text-5xl text-[#F5B800] group-hover:scale-110 transition-transform duration-300' />
							</div>
							<h3 className='text-lg font-semibold text-white group-hover:text-[#F5B800] transition-colors duration-300'>
								Patrol Services
							</h3>
						</div>
					</div>
				</div>
			</section>
			{/* Why Choose US */}
			<section
				className='relative bg-cover bg-center text-white py-16 px-6'
				style={{
					backgroundImage: "url('../src/assets/images/guard_with_phone.jpg')",
				}}
			>
				{/* Dark overlay for readability */}
				<div className='absolute inset-0 bg-black bg-opacity-70'></div>

				<div className='max-w-7xl mx-auto relative z-10'>
					<h2 className='text-3xl md:text-4xl font-bold text-center text-white mb-12'>
						Why Choose Us
					</h2>

					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
						{/* Feature Card */}
						<div className='group bg-[#11263C]/80 backdrop-blur-md rounded-xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'>
							<FaAward className='text-5xl text-[#F5B800] mb-4 group-hover:scale-110 transition-transform duration-300' />
							<h3 className='text-lg font-semibold text-white mb-2 group-hover:text-[#F5B800] transition-colors duration-300'>
								Proven Track Record
							</h3>
							<p className='text-gray-300 text-sm leading-relaxed'>
								Years of trusted service delivering top-notch security solutions
								to hundreds of satisfied clients.
							</p>
						</div>

						<div className='group bg-[#11263C]/80 backdrop-blur-md rounded-xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'>
							<FaClock className='text-5xl text-[#F5B800] mb-4 group-hover:scale-110 transition-transform duration-300' />
							<h3 className='text-lg font-semibold text-white mb-2 group-hover:text-[#F5B800] transition-colors duration-300'>
								24/7 Availability
							</h3>
							<p className='text-gray-300 text-sm leading-relaxed'>
								Our team is always on standby — ensuring you’re protected every
								second of the day, every day of the year.
							</p>
						</div>

						<div className='group bg-[#11263C]/80 backdrop-blur-md rounded-xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'>
							<FaUsers className='text-5xl text-[#F5B800] mb-4 group-hover:scale-110 transition-transform duration-300' />
							<h3 className='text-lg font-semibold text-white mb-2 group-hover:text-[#F5B800] transition-colors duration-300'>
								Expert Team
							</h3>
							<p className='text-gray-300 text-sm leading-relaxed'>
								Highly trained professionals with the skills, experience, and
								commitment to safeguard what matters most.
							</p>
						</div>

						<div className='group bg-[#11263C]/80 backdrop-blur-md rounded-xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'>
							<FaShieldAlt className='text-5xl text-[#F5B800] mb-4 group-hover:scale-110 transition-transform duration-300' />
							<h3 className='text-lg font-semibold text-white mb-2 group-hover:text-[#F5B800] transition-colors duration-300'>
								Advanced Technology
							</h3>
							<p className='text-gray-300 text-sm leading-relaxed'>
								We use cutting-edge tools and systems to deliver reliable and
								efficient security coverage.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* Testimonal section */}
			<section className='bg-gray-100 py-16'>
				<div className='max-w-7xl mx-auto px-6 text-center'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-12'>
						What Our Clients Say
					</h2>
					<div className='grid md:grid-cols-3 gap-8'>
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className='bg-white p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105'
							>
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className='w-20 h-20 rounded-full mx-auto border-4 border-gray-200 mb-4'
								/>
								<p className='text-gray-600 italic mb-4'>
									"{testimonial.text}"
								</p>
								<h3 className='text-lg font-semibold text-gray-800'>
									{testimonial.name}
								</h3>
								<p className='text-sm text-gray-500'>{testimonial.role}</p>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Call to Action */}
			<section
				className='relative bg-cover bg-center text-white py-16 px-6'
				style={{
					backgroundImage: "url('../src/assets/images/guard_on_screen.jpg')",
				}}
			>
				{/* Gradient overlay for readability */}
				<div className='absolute inset-0 bg-gradient-to-r from-gray-900/90 via-black/80 to-gray-900/90'></div>

				<div className='relative max-w-5xl mx-auto text-center'>
					<motion.h2
						className='text-4xl md:text-5xl font-extrabold mb-4'
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
					>
						Your Safety. Our Priority.
					</motion.h2>

					<motion.p
						className='text-lg md:text-xl text-gray-300 mb-8'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.7 }}
					>
						JTL Security delivers professional, proactive, and reliable
						protection tailored to your needs. Experience peace of mind knowing
						we’re always one step ahead.
					</motion.p>

					<motion.button
						className='bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-full shadow-lg text-lg'
						initial={{ scale: 0.9, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{ duration: 0.3 }}
					>
						Get Protected Today
					</motion.button>
				</div>
			</section>
			<Footer />;
		</>
	);
};

export default Home;
