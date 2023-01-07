import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

const Modal = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
		};
	});

	useEffect(() => {
		Open ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
	}, [Open]);

	return (
		<>
			{Open && (
				<aside>
					<div className='con'>{props.children}</div>
					<span
						className='btnClose'
						onClick={() => {
							setOpen(false);
						}}
					>
						<FontAwesomeIcon icon={faXmark} />
					</span>
				</aside>
			)}
		</>
	);
});

export default Modal;
