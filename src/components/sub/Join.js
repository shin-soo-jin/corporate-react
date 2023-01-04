import Layout from '../common/Layout';

function Join() {
	const terms =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci et iure omnis numquam? Corrupti distinctio mollitia voluptatem, hic totam, blanditiis dolor suscipit nesciunt modi dolore ipsa esse impedit tempore necessitatibus numquam aliquid unde sunt iusto laudantium sequi corporis error facilis incidunt? Labore incidunt omnis odit, asperiores alias ex debitis quae magnam nisi, delectus, ratione mollitia. Tenetur, similique quis? Dolorem amet accusamus ea, obcaecati hic, suscipit voluptas itaque ipsam praesentium officia laudantium tempore aliquid maxime? Accusantium doloremque consequatur ducimus debitis saepe velit quo ipsum iste voluptates? Facilis alias similique aperiam, perferendis illum est assumenda pariatur ipsa officia cumque voluptas quis eos quaerat eveniet accusantium exercitationem consequatur, eligendi, provident aut mollitia sint nam totam. Aliquid architecto mollitia exercitationem iusto alias delectus cum, quo harum cupiditate! Id voluptate facere, nostrum possimus quidem consectetur debitis illum neque sequi! Modi esse aspernatur doloremque dolores iure suscipit! Deserunt sunt vitae incidunt impedit fugiat ut repellat corrupti!';
	return (
		<Layout name={'JOIN'} txt={'Join Our Company'}>
			<form action=''>
				<legend className='hidden'>Terms of Use</legend>
				<h2>
					<label htmlFor='terms'>Terms of Use</label>
				</h2>
				<textarea name='terms' id='terms' cols='30' rows='10' value={terms} readOnly />
				<div className='agree'>
					<input type='checkbox' name='agree' id='agree' />
					<label htmlFor='agree'>Agree</label>
				</div>

				<h2>User Information</h2>
				<table>
					<caption className='hidden'>User Information</caption>
					<tbody>
						{/* name */}
						<tr>
							<th scope='row'>
								<label htmlFor='name'>NAME</label>
							</th>
							<td>
								<input type='text' name='name' id='name' />
							</td>
						</tr>
						{/* id */}
						<tr>
							<th scope='row'>
								<label htmlFor='id'>ID</label>
							</th>
							<td>
								<input type='text' name='id' id='id' />
							</td>
						</tr>
						{/* password */}
						<tr>
							<th scope='row'>
								<label htmlFor='pwd1'>PASSWORD</label>
							</th>
							<td>
								<input type='password' name='pwd1' id='pwd1' />
							</td>
						</tr>
						{/* confirm password */}
						<tr>
							<th scope='row'>
								<label htmlFor='pwd2'>CONFIRM PASSWORD</label>
							</th>
							<td>
								<input type='password' name='pwd2' id='pwd2' />
							</td>
						</tr>
						{/* email */}
						<tr>
							<th scope='row'>
								<label htmlFor='email'>E-MAIL</label>
							</th>
							<td>
								<input type='text' name='email' id='email' />
							</td>
						</tr>
						{/* phone number */}
						<tr>
							<th scope='row'>
								<label htmlFor='phone1'>PHONE NUMBER</label>
							</th>
							<td>
								<select name='tel' id='tel'>
									<option value=''>선택하세요</option>
									<option value='010'>010</option>
								</select>
								-<input type='tel' name='phone1' id='phone1' />
								-<input type='tel' name='phone2' id='phone2' />
							</td>
						</tr>
					</tbody>
				</table>
				<div className='joinBtn'>
					<input type='submit' value='SIGN UP' />
				</div>
			</form>
		</Layout>
	);
}

export default Join;
