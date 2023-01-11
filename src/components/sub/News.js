import { useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';
import Community from './Community';
import Notice from './Notice';

function News() {
	const noticeRef = useRef(null);
	const communityRef = useRef(null);
	const [IndexState, setIndexState] = useState(1);

	useEffect(() => {
		IndexState === 1
			? communityRef.current.classList.add('on')
			: communityRef.current.classList.remove('on');
		IndexState === 2
			? noticeRef.current.classList.add('on')
			: noticeRef.current.classList.remove('on');
	}, [IndexState]);

	return (
		<Layout name={'NEWS'} txt={'News Of Our Company'}>
			<div className='inner'>
				<article className='con'>
					<h2 className='hidden'>이벤트,뉴스,자주하는질문</h2>
					<ul>
						<li className={IndexState === 1 ? 'on' : ''} onClick={() => setIndexState(1)}>
							커뮤니티
						</li>
						<li className={IndexState === 2 ? 'on' : ''} onClick={() => setIndexState(2)}>
							공지사항
						</li>
					</ul>
					<Community ref={communityRef} />
					<Notice ref={noticeRef} />
				</article>
			</div>
		</Layout>
	);
}

export default News;
