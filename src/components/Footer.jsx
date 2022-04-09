import React from 'react';

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

import logo from '../assets/logo.png';

const Footer = () => {
	return (
		<footer className='container mx-auto p-4 bg-white sm:p-6 dark:bg-gray-800'>
			<div className='flex justify-center items-center md:flex md:justify-between'>
				<div className='mb-6 md:mb-0'>
					<a href='/#' className='flex items-center'>
						<img src={logo} className='w-16' alt='JK.dev Logo' />
						<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
							JK.dev
						</span>
					</a>
				</div>
				<div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
					<a
						href='https://www.linkedin.com/in/jincheng-kuang'
						target='_blank'
						rel='noreferrer'
						className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
					>
						<AiFillLinkedin size={30} />
					</a>
					<a
						href='https://github.com/jinchengKuang'
						target='_blank'
						rel='noreferrer'
						className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
					>
						<AiFillGithub size={30} />
					</a>
				</div>
			</div>
			<hr className='my-3 border-gray-200 sm:mx-auto dark:border-gray-700' />
			<div className='sm:flex sm:items-center sm:justify-between'>
				<span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
					© 2022{' '}
					<a href='https://flowbite.com' className='hover:underline'>
						JK.dev
					</a>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	);
};

export default Footer;
