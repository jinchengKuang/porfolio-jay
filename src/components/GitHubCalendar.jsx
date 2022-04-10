import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubCalendar = () => {
	return (
		<div className='container flex flex-col justify-center mx-auto my-5 max-w-5xl px-5'>
			<div className='text-center font-bold text-5xl mx-auto py-5 mb-4'>
				<span className='text-blue-600 tracking-wide font-extrabold'>
					CODING
				</span>
			</div>
			<GitHubCalendar
				username='jinchengKuang'
				blockSize={15}
				blockMargin={5}
				color='green'
				fontSize={18}
			/>
		</div>
	);
};

export default GithubCalendar;
