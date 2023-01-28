import Header from '../common/Header';
import About from './About';
import Company from './Company';
import Contact from './Contact';
import News from './News';
import Visual from './Visual';
import Work from './Work';
import Scrollnav from './Scrollnav';
import Btntop from '../common/Btntop';

function Main() {
	return (
		<main>
			<Header type={'main'} />
			<Visual />
			<About />
			<Company />
			<Work />
			<News />
			<Contact />
			<Scrollnav />
			<Btntop />
		</main>
	);
}

export default Main;
