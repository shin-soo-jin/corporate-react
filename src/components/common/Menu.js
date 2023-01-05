import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { forwardRef, useImperativeHandle, useState } from 'react';

const Menu = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);
	const active = { color: '#4b84db' };

	useImperativeHandle(ref, () => {
		return { toggle: () => setOpen(!Open) };
	});

	return (
		<>
			{Open && (
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
			)}
		</>
	);
});

export default Menu;
