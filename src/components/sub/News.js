import { useRef, useState } from 'react';
import Layout from '../common/Layout';

function News() {
	const dummyPosts = [
		{
			title: 'The standard Lorem Ipsum passage.',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		},
		{
			title: '1914 translation by H. Rackham',
			content:
				'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.',
		},
		{
			title: 'It is a long established fact.',
			content:
				"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
		},
		{
			title: 'Contrary to popular belief.',
			content:
				'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form',
		},
		{
			title: 'Lorem Ipsum is simply dummy text.',
			content:
				' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		},
		{
			title: 'The standard chunk of Lorem Ipsum used',
			content:
				"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
		},
	];

	const input = useRef(null);
	const textarea = useRef(null);
	const [Posts, setPosts] = useState(dummyPosts);
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

	// 글 수정모드 변경함수
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

	return (
		<Layout name={'NEWS'} txt={'News Of Our Company'}>
			<div className='inputBox'>
				<div className='txt'>
					<input type='text' placeholder='제목을 입력하세요' ref={input} />
					<textarea cols='30' rows='4' placeholder='본문을 입력하세요' ref={textarea} />
				</div>
				<div className='btns'>
					<button onClick={resetForm}>CANCEL</button>
					<button onClick={creatPost}>WRITE</button>
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
											<input type='text' defaultValue={post.title} />
										</h2>
										<p>
											<textarea cols='30' rows='4' defaultValue={post.content} />
										</p>
									</div>
									<div className='btns'>
										<button>CANCEL</button>
										<button>UPDATE</button>
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
										<button onClick={() => enableUpdate(idx)}>EDIT</button>
										<button onClick={() => deletePost(idx)}>DELETE</button>
									</div>
								</>
							)}
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default News;
