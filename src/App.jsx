import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			{/* Navbar */}
			<Navbar />
			<div className='font-sans bg-black text-white'>
				{/* Hero Section */}
				<Hero />

				<section className='container mx-auto px-6 py-20'>
					<h2 className='text-3xl font-bold text-center text-[#ffffff]'>
						Our Professional Security Services
					</h2>
					<p className='text-center text-gray-100 mt-4 max-w-2xl mx-auto'>
						We offer top-notch guard services, armed escorts, event security,
						and advanced technology solutions to keep you safe and secure.
					</p>
				</section>

				{/* Footer */}
				<Footer />
			</div>
		</>
	);
}

export default App;
