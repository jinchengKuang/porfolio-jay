import './App.css';
import {
	GitHubCalendar,
	Skills,
	Education,
	Experience,
	Footer,
	Navbar,
} from './components';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Skills />
			<Education />
			<Experience />
			<GitHubCalendar />
			<Footer />
		</div>
	);
}

export default App;
