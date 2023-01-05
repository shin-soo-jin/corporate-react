import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { forwardRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import React from 'react';

const Menu = forwardRef((props, ref) => {
	const active = { color: '#4b84db' };

	return (
		<AnimatePresence>
			<motion.div
				ref={ref}
				className='menuMo'
				initial={{ x: '100%' }}
				animate={{ x: '0%', transition: { duration: 0.5 } }}
				exit={{ x: '100%', transition: { duration: 0.5 } }}
			>
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
			</motion.div>
		</AnimatePresence>
	);
});

export default Menu;
