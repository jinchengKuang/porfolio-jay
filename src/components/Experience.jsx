import React from 'react';
import { AiFillCode } from 'react-icons/ai';
import { FaLaptopCode } from 'react-icons/fa';

const Experience = () => {
	return (
		<div>
			<div className='text-center text-5xl mx-auto my-12 text-blue-600 tracking-wide font-extrabold'>
				Work Experience
			</div>
			<div className='container flex justify-center mx-auto max-w-5xl'>
				<ol className='relative border-l border-b border-gray-200 dark:border-gray-700'>
					{/* work experience 1 */}
					<li className='ml-6'>
						<span className='flex absolute -left-4 justify-center items-center w-8 h-8 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
							<FaLaptopCode color='blue' />
						</span>
						<a href='https://www.points.com' target='_blank' rel='noreferrer'>
							<h3 className='flex items-center mb-1 text-lg font-semibold translate-x-2 text-gray-900 dark:text-white'>
								Web Developer
								<span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
									Jan 2022 - Present
								</span>
							</h3>
							<span className='block mt-3 text-base font-normal leading-none translate-x-2 text-gray-400 dark:text-gray-500'>
								Points.com Inc.
							</span>
							<address className='block mt-2 mb-5 text-base font-normal leading-none text-gray-400 translate-x-2 dark:text-gray-500'>
								Toronto, ON
							</address>
						</a>
						<ul className='translate-x-5'>
							<li className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400 max-w-2xl list-disc translate-x-4'>
								Develop responsive and interactive production web pages with
								customized features to support multilingual marketing campaigns
								using jQuery and React, considering cross-browser compatibility
								from IE9 and above
							</li>
							<li className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400 max-w-2xl list-disc translate-x-4'>
								Build a React team site to integrate frequently used resources
								from Google documents and Splunk using related packages and REST
								API, increasing work efficiency for the team
							</li>
							<li className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400 max-w-2xl list-disc translate-x-4'>
								Create and maintain personalized Transactional emails templates
								using AMPscript on Salesforce Marketing Cloud for partners to
								build customer relationships and generate extra revenue
							</li>
							<li className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400 max-w-2xl list-disc translate-x-4'>
								Collaborate with various teams and provide technical support and
								troubleshooting assistance for warranty solutions
							</li>
						</ul>
					</li>

					{/* work experience 2 */}
					<li className='mb-10 ml-6'>
						<span className='flex absolute -left-4 justify-center items-center w-8 h-8 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
							<AiFillCode color='blue' />
						</span>
						<a href='https://www.points.com' target='_blank' rel='noreferrer'>
							<h3 className='flex items-center mb-1 text-lg font-semibold translate-x-2 text-gray-900 dark:text-white'>
								Junior Developer
								<span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
									Sep 2021 - Dec 2021
								</span>
							</h3>
							<span className='block mt-3 text-base font-normal leading-none translate-x-2 text-gray-400 dark:text-gray-500'>
								Points.com Inc.
							</span>
							<address className='block mt-2 mb-5 text-base font-normal leading-none text-gray-400 translate-x-2 dark:text-gray-500'>
								Toronto, ON
							</address>
						</a>
						<ul className='translate-x-5'>
							<li className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400 max-w-2xl list-disc translate-x-4'>
								Developed Splunk monitoring alerts as part of monitoring
								strategies to proactively identify potential issues, increasing
								ticket resolution speed and partner satisfaction rate
							</li>
							<li className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400 max-w-2xl list-disc translate-x-4'>
								Established integrated dashboards to parse system machine data
								and generate reports more efficiently in Splunk , saving manual
								searching hours and resources by 50%
							</li>
							<li className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400 max-w-2xl list-disc translate-x-4'>
								Contributed to internal Python library and scripts to simplify
								work processes and automate daily tasks, reducing repeated work
								for the team to increase work efficiency and accuracy
							</li>
							<li className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400 max-w-2xl list-disc translate-x-4'>
								Improved internal Google Sites and team technical documentation
								for a better view and easier maintenance
							</li>
							{/* <a
							href='/#'
							className='inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
						>
							<MdSimCardDownload className='mr-1 text-base' />
							Download ZIP
						</a> */}
						</ul>
					</li>
				</ol>
			</div>
		</div>
	);
};

export default Experience;
