function Layout(props) {
	return (
		<section className={`content ${props.name}`}>
			<figure
			// style={{
			// 	backgroundImage: `url(${process.env.PUBLIC_URL}/img/${props.backgroundImageUrl})`,
			// }}
			>
				<div className='inner'>
					<h2>{props.txt}</h2>
				</div>
			</figure>
			{props.children}
		</section>
	);
}

export default Layout;
