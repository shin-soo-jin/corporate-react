import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as types from './redux/actionType';

// common
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Menu from './components/common/Menu';

// main
import Main from './components/main/Main';

// sub
import About from './components/sub/About';
import Contact from './components/sub/Contact';
import Gallery from './components/sub/Gallery';
import Join from './components/sub/Join';
import News from './components/sub/News';
import Service from './components/sub/Service';

import './scss/style.scss';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: types.YOUTUBE.start });
		dispatch({ type: types.FLICKR.start, Opt: { type: 'user', user: '197333350@N05' } });
		dispatch({ type: types.MENU.close });
	}, [dispatch]);

	return (
		<>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>
			<Menu />

			<Route path='/about' component={About} />
			<Route path='/contact' component={Contact} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/news' component={News} />
			<Route path='/service' component={Service} />
			<Route path='/join' component={Join} />

			<Footer />
		</>
	);
}

export default App;
