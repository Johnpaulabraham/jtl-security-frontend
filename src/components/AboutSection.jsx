// src/components/AboutSection.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const AboutSection = () => {
	return (
		<section className='bg-white py-20'>
			<div className='container mx-auto grid md:grid-cols-2 gap-14 px-6 items-center'>
				{/* Left Column: Image */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<img
						src='https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200'
						alt='JTL Security Team in Action'
						className='rounded-xl shadow-2xl border border-gray-200'
					/>
				</motion.div>

				{/* Right Column: Content */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					{/* Section Title */}
					<h2 className='text-4xl md:text-5xl font-extrabold text-[#0A2342] mb-6 leading-tight'>
						Safeguarding Lives, Assets & Property with Excellence
					</h2>

					{/* Intro Paragraph */}
					<p className='text-lg text-gray-700 mb-6 leading-relaxed'>
						At{" "}
						<span className='font-semibold'>JTL Security & Safety Limited</span>
						, we deliver premium security and safety solutions tailored to meet
						the unique needs of individuals, businesses, and institutions across
						Nigeria. With our proven expertise, cutting-edge technology, and
						highly trained professionals, we stand as a trusted name in the
						protection of lives and property.
					</p>

					{/* Bullet Points */}
					<ul className='space-y-2 text-gray-700 mb-8'>
						<li className='flex items-center gap-2'>
							<span className='text-green-600 font-bold'>✔</span> Licensed
							Professional Security Personnel
						</li>
						<li className='flex items-center gap-2'>
							<span className='text-green-600 font-bold'>✔</span> 24/7
							Monitoring & Rapid Response
						</li>
						<li className='flex items-center gap-2'>
							<span className='text-green-600 font-bold'>✔</span> Advanced
							Safety & Risk Management Training
						</li>
						<li className='flex items-center gap-2'>
							<span className='text-green-600 font-bold'>✔</span> Asset &
							Property Protection Solutions
						</li>
					</ul>

					{/* Call-to-Action Button */}
					<a
						href='/about'
						className='inline-block px-6 py-3 bg-[#0A2342] text-white rounded-lg font-semibold shadow-lg hover:bg-[#133b6d] transition-colors'
					>
						Learn More About Us
					</a>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutSection;
