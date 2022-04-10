import './App.css';
import {
	GitHubCalendar,
	Skills,
	Education,
	Experience,
	Footer,
	Navbar,
	About,
	Contact,
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
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
