import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';

function Header(props) {
	const active = { color: '#4b84db' };
	const [Open, setOpen] = useState(false);

	return (
		<header className={props.type}>
			<div className='inner'>
				<h1
					onClick={() => {
						setOpen(false);
					}}
				>
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

				<span
					className={Open ? 'on btnCall' : 'btnCall'}
					onClick={() => {
						setOpen(!Open);
					}}
				>
					<span>menu</span>
				</span>

				<AnimatePresence>
					{Open && (
						<motion.div
							className='menuMo'
							initial={{ x: '100%' }}
							animate={{ x: '0%', transition: { duration: 0.5 } }}
							exit={{ x: '100%', transition: { duration: 0.5 } }}
						>
							<nav
								id='gnbMo'
								onClick={() => {
									setOpen(false);
								}}
							>
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
					)}
				</AnimatePresence>
			</div>
		</header>
	);
}

export default Header;
