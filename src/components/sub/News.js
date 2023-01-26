import { useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';
import Event from './Event';
import Notice from './Notice';

function News() {
	const notice = useRef(null);
	const event = useRef(null);
	const [Index, setIndex] = useState(1);

	useEffect(() => {
		Index === 1 ? event.current.classList.add('on') : event.current.classList.remove('on');
		Index === 2 ? notice.current.classList.add('on') : notice.current.classList.remove('on');
	}, [Index]);

	return (
		<Layout
			name={'NEWS'}
			txt={'NEWS OF OUR COMPANY'}
			tit={'Lorem ipsum dolor sit amet consectetur.'}
			titTxt={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, possimus?'}
		>
			<div className='inner'>
				<article className='con'>
					<ul>
						<li className={Index === 1 ? 'on' : ''} onClick={() => setIndex(1)}>
							EVENT
						</li>
						<li className={Index === 2 ? 'on' : ''} onClick={() => setIndex(2)}>
							NOTICE
						</li>
					</ul>
					<Event ref={event} />
					<Notice ref={notice} />
				</article>
			</div>
		</Layout>
	);
}

export default News;
