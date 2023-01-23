function Layout(props) {
	return (
		<section className={`content ${props.name}`}>
			<figure
				// style={{
				// 	backgroundImage: `url(${process.env.PUBLIC_URL}/img/${props.backgroundImageUrl})`,
				// }}
				style={{
					background: `url(${process.env.PUBLIC_URL}/img/1visual.jpg) no-repeat 0 0/cover`,
				}}
			>
				<div className='inner'>
					<h1>{props.txt}</h1>
				</div>
			</figure>
			<div className='inner'>
				<h1>{props.txt}</h1>
			</div>
			{props.children}
		</section>
	);
}

export default Layout;
