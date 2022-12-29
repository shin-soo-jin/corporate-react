import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
	return (
		<header>
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
								<NavLink to='/about'>ABOUT</NavLink>
							</li>
							<li>
								<NavLink to='/youtube'>YOUTUBE</NavLink>
							</li>
							<li>
								<NavLink to='/gallery'>GALLERY</NavLink>
							</li>
							<li>
								<NavLink to='/news'>NEWS</NavLink>
							</li>
							<li>
								<NavLink to='/contact'>CONTACT</NavLink>
							</li>
						</ul>
					</nav>
					<ul className='util'>
						<li>
							<NavLink to='/search'>
								<FontAwesomeIcon icon={faMagnifyingGlass} />
							</NavLink>
						</li>
						<li>
							<NavLink to='/join'>
								<FontAwesomeIcon icon={faUser} />
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;
