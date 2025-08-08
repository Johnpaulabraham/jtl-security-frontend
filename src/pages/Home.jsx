import React from "react";
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
import SecAss from "../assets/images/SecAss.jpg"; // Replace with your preferred professional image URL
import Footer from "../components/Footer";

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
				className='relative bg-cover bg-center py-20 px-6'
				style={{
					backgroundImage: "url(${SecAss})", // Replace with your preferred professional image URL
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
			<Footer />;
		</>
	);
};

export default Home;
