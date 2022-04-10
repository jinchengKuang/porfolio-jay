import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import {
	SiJavascript,
	SiJquery,
	SiMongodb,
	SiMysql,
	SiPostgresql,
	SiExpress,
	SiC,
	SiCplusplus,
	SiPython,
	SiJava,
	SiLinux,
	SiGit,
	SiHeroku,
	SiFigma,
	SiVisualstudiocode,
} from 'react-icons/si';

const Skills = () => {
	return (
		<div>
			<div className='text-center text-blue-600 tracking-wide font-extrabold text-5xl mx-auto my-12'>
				Skills
			</div>
			<div className='container flex flex-row gap-8 flex-wrap justify-center mx-auto my-5 w-2/3'>
				{/* languages */}
				<div class='p-6 w-1/4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
					<a href='/#'>
						<h5 class='mb-5 text-2xl font-semibold text-center text-blue-500 dark:text-white'>
							Languages
						</h5>
					</a>
					<div className='flex flex-row items-center justify-evenly  gap-2'>
						<SiC size={30} />
						<SiCplusplus size={30} />
						<SiPython size={30} />
						<SiJavascript size={30} />
						<SiJava size={30} />
					</div>
				</div>

				{/* front end */}
				<div class='p-6 w-1/4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
					<a href='/#'>
						<h5 class='mb-5 text-2xl font-semibold text-center text-blue-500 dark:text-white'>
							Front End
						</h5>
					</a>
					<div className='flex flex-row items-center justify-evenly gap-2'>
						<FaReact size={30} />
						<AiFillHtml5 size={35} />
						<DiCss3 size={35} />
						<SiJavascript size={30} />
						<SiJquery size={30} />
					</div>
				</div>

				{/* back end */}
				<div class='p-6 w-1/4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
					<a href='/#'>
						<h5 class='mb-5 text-2xl font-semibold  text-center text-blue-500 dark:text-white'>
							Back End
						</h5>
					</a>
					<div className='flex flex-row items-center justify-evenly gap-2'>
						<FaNodeJs size={30} />
						<SiMysql size={30} />
						<SiMongodb size={30} />
						<SiPostgresql size={30} />
						<SiExpress size={30} />
					</div>
				</div>

				{/* tools */}
				<div class='p-6 w-1/4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
					<a href='/#'>
						<h5 class='mb-5 text-2xl font-semibold  text-center text-blue-500 dark:text-white gap-2'>
							Developer Tools
						</h5>
					</a>
					<div className='flex flex-row items-center justify-evenly'>
						<SiLinux size={30} />
						<SiGit size={30} />
						<SiHeroku size={30} />
						<SiFigma size={30} />
						<SiVisualstudiocode size={30} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
