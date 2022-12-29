import { Route } from 'react-router-dom';

// common
import Footer from './components/common/Footer';
import Header from './components/common/Header';

// main
import Visual from './components/main/Visual';
import Content from './components/main/Content';

// sub
import About from './components/sub/About';
import Contact from './components/sub/Contact';
import Gallery from './components/sub/Gallery';
import Join from './components/sub/Join';
import News from './components/sub/News';
import Youtube from './components/sub/Youtube';

function App() {
	return (
		<>
			<Header />

			<Route exact path='/'>
				<Visual />
				<Content />
			</Route>

			<Route path='/about' component={About} />
			<Route path='/contact' component={Contact} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/Join' component={Join} />
			<Route path='/News' component={News} />
			<Route path='/Youtube' component={Youtube} />

			<Footer />
		</>
	);
}

export default App;
