import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Modal() {
	return (
		<aside>
			<div className='con'></div>
			<span className='btnClose'>
				<FontAwesomeIcon icon={faXmark} />
			</span>
		</aside>
	);
}

export default Modal;
