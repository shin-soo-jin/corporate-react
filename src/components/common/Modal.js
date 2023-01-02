import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

function Modal(props) {
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	return (
		<aside>
			<div className='con'>{props.children}</div>
			<span
				className='btnClose'
				onClick={() => {
					props.setOpen(false);
				}}
			>
				<FontAwesomeIcon icon={faXmark} />
			</span>
		</aside>
	);
}

export default Modal;
