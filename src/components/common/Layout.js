import { useEffect } from 'react';
import Btntop from './Btntop';

function Layout(props) {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
	}, []);
	return (
		<>
			<section className={`content ${props.name}`}>
				<figure
				// style={{
				// 	backgroundImage: `url(${process.env.PUBLIC_URL}/img/${props.backgroundImageUrl})`,
				// }}
				>
					<div className='inner'>
						<h2>{props.txt}</h2>
					</div>
				</figure>
				{props.children}
			</section>
			<Btntop />
		</>
	);
}

export default Layout;
