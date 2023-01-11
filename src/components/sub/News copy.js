import { faCheck, faPen, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';

function News() {
	const getLocalData = () => {
		const data = localStorage.getItem('post');
		return JSON.parse(data);
	};
	const input = useRef(null);
	const textarea = useRef(null);
	const inputEdit = useRef(null);
	const textareaEdit = useRef(null);
	const [Posts, setPosts] = useState(getLocalData());
	const [Allowed, setAllowed] = useState(true);

	// 글 작성 함수
	const creatPost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			return alert('제목과 본문을 모두 입력하세요');
		}
		setPosts([{ title: input.current.value, content: textarea.current.value }, ...Posts]);
		resetForm();
	};

	// 글 작성취소 함수
	const resetForm = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	// 글 삭제 함수
	const deletePost = (index) => {
		if (!window.confirm('해당 게시글을 삭제하겠습니까?')) return;
		setPosts(Posts.filter((_, idx) => idx !== index));
	};

	// 글 수정모드 변경 함수
	const enableUpdate = (index) => {
		if (!Allowed) return;
		setAllowed(false);
		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = true;
				return post;
			})
		);
	};

	// 글 출력모드 변경 함수
	const disableUpdate = (index) => {
		setAllowed(true);
		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = false;
				return post;
			})
		);
	};

	// 글 수정 함수
	const updatePost = (index) => {
		if (!inputEdit.current.value.trim() || !textareaEdit.current.value.trim()) {
			return alert('수정할 제목과 본문을 모두 입력하세요');
		}
		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) {
					post.title = inputEdit.current.value;
					post.content = textareaEdit.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);
		setAllowed(true);
	};

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, [Posts]);

	return (
		<Layout name={'NEWS'} txt={'News Of Our Company'}>
			<article className='tit'>
				<h2>Lorem ipsum dolor sit amet consectetur.</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, possimus?</p>
			</article>

			<article className='con'>
				<h2 className='hidden'>이벤트,뉴스,자주하는질문</h2>
				<ul>
					<li>게시판</li>
					<li>뉴스</li>
					<li>자주하는질문</li>
				</ul>

				<section className='section1'>
					<div className='inputBox'>
						<div className='txt'>
							<input type='text' placeholder='제목을 입력하세요' ref={input} />
							<textarea cols='30' rows='4' placeholder='본문을 입력하세요' ref={textarea} />
						</div>
						<div className='btns'>
							<button onClick={resetForm}>취소</button>
							<button onClick={creatPost}>작성</button>
						</div>
					</div>
					<div className='showBox'>
						{Posts.map((post, idx) => {
							return (
								<article key={idx}>
									{post.enableUpdate ? (
										// 수정 모드
										<>
											<div className='txt'>
												<h2>
													<input type='text' defaultValue={post.title} ref={inputEdit} />
												</h2>
												<p>
													<textarea
														cols='30'
														rows='4'
														defaultValue={post.content}
														ref={textareaEdit}
													/>
												</p>
											</div>
											<div className='btns'>
												<button onClick={() => disableUpdate(idx)}>
													<FontAwesomeIcon icon={faXmark} />
												</button>
												<button onClick={() => updatePost(idx)}>
													<FontAwesomeIcon icon={faCheck} />
												</button>
											</div>
										</>
									) : (
										// 출력 모드
										<>
											<div className='txt'>
												<h2>{post.title}</h2>
												<p>{post.content}</p>
											</div>
											<div className='btns'>
												<button onClick={() => enableUpdate(idx)}>
													<FontAwesomeIcon icon={faPen} />
												</button>
												<button onClick={() => deletePost(idx)}>
													<FontAwesomeIcon icon={faTrash} />
												</button>
											</div>
										</>
									)}
								</article>
							);
						})}
					</div>
				</section>

				<section className='section2'></section>
				<section>section2</section>
			</article>
		</Layout>
	);
}

export default News;
