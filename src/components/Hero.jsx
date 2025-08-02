// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Shield, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "../assets/images/hero-bg-img.jpg"; // ✅ Replace with your actual image

const Hero = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
			className='relative min-h-screen flex flex-col justify-center bg-fixed bg-center bg-cover overflow-hidden'
			style={{ backgroundImage: `url(${heroImage})` }}
		>
			<br />
			<br />
			<br />
			<br />
			{/* 🔹 Gradient Overlay */}
			<div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-[#0A2342]/90'></div>

			{/* 🔹 Content Wrapper */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className='relative z-10 text-center px-6 md:px-12 max-w-4xl mx-auto mt-12 md:mt-0'
			>
				{/* Heading */}
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-3xl md:text-6xl font-extrabold text-white leading-snug md:leading-tight mb-4'
				>
					Your Safety,
					<span className='block text-[#1A8EDB]'>Our Priority.</span>
				</motion.h1>

				{/* Subtext */}
				<motion.p
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.8 }}
					className='text-base md:text-xl text-gray-200 leading-relaxed mb-8 px-2 md:px-0'
				>
					With <span className='font-semibold'>licensed security experts</span>{" "}
					and
					<span className='font-semibold'>
						{" "}
						advanced surveillance solutions
					</span>
					, JTL Security ensures safety for your people, assets, and property.
				</motion.p>

				{/* CTA Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.8 }}
					className='flex flex-col sm:flex-row gap-4 justify-center mb-10'
				>
					<a
						href='/contact'
						className='flex items-center justify-center gap-2 bg-[#1A8EDB] hover:bg-[#0074C2] text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition transform hover:scale-105'
					>
						<Shield size={20} /> Request a Quote
					</a>
					<a
						href='/about'
						className='flex items-center justify-center gap-2 border border-white/70 text-white hover:bg-white hover:text-[#0A2342] px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105'
					>
						Learn More <ArrowRight size={18} />
					</a>
				</motion.div>

				{/* Trust Badges */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.8 }}
					className='flex flex-wrap justify-center gap-4 md:gap-6 mb-12'
				>
					{[
						"Licensed RC 1055137",
						"Govt. Approved Security Provider",
						"24/7 Rapid Response Team",
					].map((badge, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.7 + index * 0.2 }}
							className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg'
						>
							<CheckCircle size={20} className='text-[#1A8EDB]' />
							<span className='text-sm text-gray-200'>{badge}</span>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default Hero;
