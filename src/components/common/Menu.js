import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../redux/actionType';

function Menu() {
	const active = { color: '#4b84db' };
	const dispatch = useDispatch();
	const menu = useSelector((store) => store.menuReducer.open);

	return (
		<AnimatePresence>
			{menu && (
				<motion.div
					className='menuMo'
					initial={{ x: '100%' }}
					animate={{ x: '0%', transition: { duration: 0.5 } }}
					exit={{ x: '100%', transition: { duration: 0.5 } }}
					onClick={() => {
						dispatch({ type: types.MENU.close });
					}}
				>
					<nav id='gnbMo'>
						<ul>
							<li>
								<NavLink to='/about' activeStyle={active}>
									ABOUT
								</NavLink>
							</li>
							<li>
								<NavLink to='/service' activeStyle={active}>
									SERVICE
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
							<NavLink to='/join' activeStyle={active}>
								<FontAwesomeIcon icon={faUser} />
							</NavLink>
						</li>
					</ul>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default Menu;
