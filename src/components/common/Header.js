import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../redux/actionType';

function Header(props) {
	const active = { color: '$color1' };
	const dispatch = useDispatch();
	const menu = useSelector((store) => store.menuReducer.open);

	return (
		<header className={props.type}>
			<div className='inner'>
				<h1
					onClick={() => {
						dispatch({ type: types.MENU.close });
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
				</div>

				<span
					className={menu ? 'on btnCall' : 'btnCall'}
					onClick={() => {
						dispatch({ type: types.MENU.toggle });
					}}
				>
					<span>menu</span>
				</span>
			</div>
		</header>
	);
}

export default Header;
