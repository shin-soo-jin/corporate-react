import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { forwardRef } from 'react';

const Menu = forwardRef((props, ref) => {
	const active = { color: '#4b84db' };
	return (
		<div className='menuMo'>
			<nav id='gnbMo'>
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
	);
});

export default Menu;
