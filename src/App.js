import './App.css';
import {
	GitHubCalendar,
	Skills,
	Education,
	Experience,
	Footer,
	Navbar,
	About,
} from './components';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<About />
			<Skills />
			<Education />
			<Experience />
			<GitHubCalendar />
			<Footer />
		</div>
	);
}

export default App;
