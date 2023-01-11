function Layout(props) {
	const publicUrl = process.env.PUBLIC_URL;
	return (
		<section className={`content ${props.name}`}>
			<figure></figure>
			<div className='inner'>
				<h1>
					{props.name} <span>{props.txt}</span>
				</h1>
			</div>
			{props.children}
		</section>
	);
}

export default Layout;
