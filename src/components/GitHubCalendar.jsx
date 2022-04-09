import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubCalendar = () => {
	return (
		<div className='container flex justify-center mx-auto my-5 max-w-5xl'>
			<GitHubCalendar
				username='jinchengKuang'
				blockSize={20}
				blockMargin={5}
				color='blue'
				fontSize={18}
			/>
		</div>
	);
};

export default GithubCalendar;
