import { useEffect, useRef } from 'react';

function News() {
	const getLocalData = () => {
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
		const data = localStorage.getItem('post');

		if (data) return JSON.parse(data);
		else return dummyPosts;
	};
	const data = useRef(getLocalData());

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(data.current));
	}, []);

	return (
		<section
			id='news'
			className='scrollSection'
			style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/news.jpg)` }}
		>
			<div className='inner'>
				<div className='text'>
					<h2>NEWS OF OUR COMPANY</h2>
					<p>
						<strong>{data.current[0].title}</strong>
						<br />
						{data.current[0].content}
					</p>
					<button className='btn'>SEE OUR LATEST WORK</button>
				</div>
				<div className='chart'>
					<p>
						<i></i>GLOBAL GOALS<span>20%</span>
						<b className='bar'></b>
					</p>
					<p>
						<i></i>CORPORATE<span>45%</span>
						<b className='bar'></b>
					</p>
					<p>
						<i></i>INVESTMENT<span>75%</span>
						<b className='bar'></b>
					</p>
					<p>
						<i></i>MARKETING<span>95%</span>
						<b className='bar'></b>
					</p>
				</div>
			</div>
		</section>
	);
}

export default News;
