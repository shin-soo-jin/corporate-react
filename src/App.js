import { Route, Switch } from 'react-router-dom';

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
import Search from './components/sub/Search';
import Youtube from './components/sub/Youtube';

import './scss/style.scss';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header type={'main'} />
					<Visual />
					<Content />
				</Route>

				<Route path='/'>
					<Header type={'sub'} />
				</Route>
			</Switch>

			<Route path='/about' component={About} />
			<Route path='/contact' component={Contact} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/news' component={News} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/search' component={Search} />
			<Route path='/join' component={Join} />

			<Footer />
		</>
	);
}

export default App;
