import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Layout(props) {
	return (
		<section className={`content ${props.name}`}>
			<figure
				/* style={{
					backgroundImage: `url(${process.env.PUBLIC_URL}/img/${props.backgroundImageUrl})`,
				}} */
				style={{
					background: `url(${process.env.PUBLIC_URL}/img/visual1.jpg) no-repeat 0 0/cover`,
				}}
			>
				<div className='inner'>
					<h1>{props.name}</h1>
					<p>{props.txt}</p>
				</div>
			</figure>
			<nav className='breadcrumb'>
				<div className='inner'>
					<ul>
						<li>
							<Link to='/'>
								<FontAwesomeIcon icon={faHome} />
							</Link>
						</li>
						<li>
							<Link to={props.link}>{props.name}</Link>
						</li>
					</ul>
				</div>
			</nav>
			{props.children}
		</section>
	);
}

export default Layout;
