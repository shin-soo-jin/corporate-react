import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
	const active = { color: '#4b84db' };
	return (
		<header className={props.type}>
			<div className='inner'>
				<h1>
					<NavLink exact to='/'>
						B
					</NavLink>
				</h1>
				<div className='menuWeb'>
					<nav id='gnb'>
						<ul>
							<li>
								<NavLink to='/about' activeStyle={active}>
									ABOUT
								</NavLink>
							</li>
							<li>
								<NavLink to='/youtube' activeStyle={active}>
									YOUTUBE
								</NavLink>
							</li>
							<li>
								<NavLink to='/gallery' activeStyle={active}>
									GALLERY
								</NavLink>
							</li>
							<li>
								<NavLink to='/news' activeStyle={active}>
									NEWS
								</NavLink>
							</li>
							<li>
								<NavLink to='/contact' activeStyle={active}>
									CONTACT
								</NavLink>
							</li>
						</ul>
					</nav>
					<ul className='util'>
						<li>
							<NavLink to='/search' activeStyle={active}>
								<FontAwesomeIcon icon={faMagnifyingGlass} />
							</NavLink>
						</li>
						<li>
							<NavLink to='/join' activeStyle={active}>
								<FontAwesomeIcon icon={faUser} />
							</NavLink>
						</li>
					</ul>
				</div>
				<FontAwesomeIcon icon={faBars} />
			</div>
		</header>
	);
}

export default Header;
