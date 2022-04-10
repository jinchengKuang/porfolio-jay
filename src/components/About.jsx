import React from 'react';
import Particles from 'react-tsparticles';
import ParticleConfig from './config/particle-config';
import Typewriter from 'typewriter-effect';

const About = () => {
	return (
		<section id='about-section'>
			{/* particle background */}
			<Particles
				params={ParticleConfig}
				className='w-full h-screen bg-gray-700 -z-1'
			></Particles>

			{/* intro text */}
			<div className='absolute mx-auto top-1/3 left-1/3 w-2/3'>
				<div>
					<h1 className='mb-5 text-8xl font-bold tracking-widest text-white text-left'>
						Hi!
					</h1>
					<p className='font-normal text-white text-6xl tracking-widest w-full'>
						I'm Jay! 👋
					</p>
				</div>
				<div className='absolute top-4/5 text-blue-400 text-6xl text-left w-full mt-20 tracking-widesr'>
					<Typewriter
						options={{
							strings: [
								'Software Developer',
								'Web Developer',
								'Lifelong Learner',
							],
							autoStart: true,
							loop: true,
							deleteSpeed: 30,
						}}
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
