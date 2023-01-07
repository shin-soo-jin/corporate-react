function News() {
	return (
		<section id='news' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/news.jpg)` }}>
			<div className='inner'>
				<div className='text'>
					<h2>NEWS OF OUR COMPANY</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, quia tempore! Est
						ipsam accusamus iste, voluptas laboriosam eos quam. Assumenda nostrum, expedita iusto
						dicta iure consequuntur illum facere eius earum!
					</p>
					<a href='#' className='btn'>
						SEE OUR LATEST WORK
					</a>
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
