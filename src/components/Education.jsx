import React from 'react';
import { IoIosSchool } from 'react-icons/io';

const Education = () => {
	return (
		<div>
			<div className='text-center text-5xl  mx-auto my-12 text-blue-600 tracking-wide font-extrabold'>
				Education
			</div>
			<div className='container flex justify-center mx-auto my-5'>
				<ol class='items-center w-1/2 sm:flex'>
					{/* education 1 */}
					<li class='relative mb-6 min-h-full sm:mb-0'>
						<div class='flex items-center'>
							<div class='flex z-10 justify-center items-center w-8 h-8 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0'>
								<IoIosSchool color='blue' size={20} />
							</div>
							<div class='hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700'></div>
						</div>
						<div class='mt-3 sm:pr-8'>
							<h3 class='text-lg font-semibold text-gray-900 dark:text-white'>
								University of Waterloo
							</h3>
							<time className='block mt-2 mb-1 text-base font-normal leading-none text-gray-400 translate-x-2 dark:text-gray-500'>
								2014 - 2016
							</time>
							<address className='block my-2 text-base font-normal leading-none text-gray-400 translate-x-2 dark:text-gray-500'>
								Waterloo, ON
							</address>
							<span class='text-base font-normal text-gray-500 dark:text-gray-400'>
								<p className='font-bold'>
									Master of Engineering in Civil Engineering
								</p>
							</span>
						</div>
					</li>

					{/* education 2 */}
					<li class='relative mb-6 min-h-full sm:mb-0'>
						<div class='flex items-center'>
							<div class='flex z-10 justify-center items-center w-8 h-8 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0'>
								<IoIosSchool color='blue' size={20} />
							</div>
							<div class='hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700'></div>
						</div>
						<div class='mt-3 sm:pr-8'>
							<h3 class='text-lg font-semibold text-gray-900 dark:text-white'>
								Seneca College of Arts and Techonology
							</h3>
							<time className='block mt-2 mb-1 text-base font-normal leading-none text-gray-400 translate-x-2 dark:text-gray-500'>
								2020 - 2022
							</time>
							<address className='block my-2 text-base font-normal leading-none text-gray-400 translate-x-2 dark:text-gray-500'>
								Toronto, ON
							</address>
							<span class='text-base font-normal text-gray-500 dark:text-gray-400'>
								<p className='font-bold'>
									Associate Degree in Computer Science
								</p>
								<ul className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400 max-w-2xl list-disc translate-x-4'>
									<li>4.0/4.0 Cumulative GPA</li>
									<li>President’s Honour List</li>
								</ul>
							</span>
						</div>
					</li>
				</ol>
			</div>
		</div>
	);
};

export default Education;
