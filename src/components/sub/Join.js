import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../common/Layout';

function Join() {
	const history = useHistory();

	const terms =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci et iure omnis numquam? Corrupti distinctio mollitia voluptatem, hic totam, blanditiis dolor suscipit nesciunt modi dolore ipsa esse impedit tempore necessitatibus numquam aliquid unde sunt iusto laudantium sequi corporis error facilis incidunt? Labore incidunt omnis odit, asperiores alias ex debitis quae magnam nisi, delectus, ratione mollitia. Tenetur, similique quis? Dolorem amet accusamus ea, obcaecati hic, suscipit voluptas itaque ipsam praesentium officia laudantium tempore aliquid maxime? Accusantium doloremque consequatur ducimus debitis saepe velit quo ipsum iste voluptates? Facilis alias similique aperiam, perferendis illum est assumenda pariatur ipsa officia cumque voluptas quis eos quaerat eveniet accusantium exercitationem consequatur, eligendi, provident aut mollitia sint nam totam. Aliquid architecto mollitia exercitationem iusto alias delectus cum, quo harum cupiditate! Id voluptate facere, nostrum possimus quidem consectetur debitis illum neque sequi! Modi esse aspernatur doloremque dolores iure suscipit! Deserunt sunt vitae incidunt impedit fugiat ut repellat corrupti!';

	const initVal = {
		agree: null,
		name: '',
		id: '',
		pwd1: '',
		pwd2: '',
		email: '',
		phone1: '',
		phone2: '',
		phone3: '',
	};
	const [Val, setVal] = useState(initVal);
	const [Err, setErr] = useState({});
	const [Submit, setSubmit] = useState(false);

	const check = (value) => {
		const errs = {};
		const num = /[0-9]/;
		const eng = /[a-zA-Z]/;
		const spc = /[~!@#$%^&*()_+?><]/;

		if (!value.agree) {
			errs.agree = '이용약관에 동의하세요';
		}
		if (value.name.length < 2) {
			errs.name = 'NAME은 2글자 이상 입력하세요';
		}
		if (value.id.length < 5) {
			errs.id = 'ID는 5글자 이상 입력하세요';
		}
		if (value.pwd1 < 5 || !num.test(value.pwd1) || !eng.test(value.pwd1) || !spc.test(value.pwd1)) {
			errs.pwd1 = 'PASSWORD는 다섯글자 이상, 영문, 숫자, 특수문자를 모두 포함하세요';
		}
		if (!value.pwd2 || value.pwd2 !== value.pwd1) {
			errs.pwd2 = 'PASSWORD와 동일하게 입력하세요';
		}
		if (value.email.length < 8 || !/@/.test(value.email)) {
			errs.email = 'E-MAIL은 8글자 이상, @를 포함한 전체 이메일 주소를 입력하세요';
		}
		if (value.phone1 === '') {
			errs.phone1 = '전화번호 앞자리를 선택해주세요';
		}
		if (isNaN(value.phone2) || isNaN(value.phone3) || !value.phone2 || !value.phone3) {
			errs.phone2 = 'PHONE NUMBER는 숫자만 입력하세요';
		}

		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	const handleCheck = (e) => {
		const { name } = e.target;
		const isChecked = e.target.checked;
		setVal({ ...Val, [name]: isChecked });
	};

	const handleSelect = (e) => {
		const { name } = e.target;
		const isSelected = e.target.value;
		setVal({ ...Val, [name]: isSelected });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(Val));
	};

	useEffect(() => {
		const len = Object.keys(Err).length;
		if (len === 0 && Submit) {
			alert('회원가입이 완료되었습니다.');
			history.push('/');
			window.scroll(0, 0);
		}
	}, [Err, Submit, history]);

	return (
		<Layout name={'JOIN'} txt={'Join Our Company'} link={'join'}>
			<div className='inner'>
				<form action='' onSubmit={handleSubmit}>
					<legend className='hidden'>Terms of Use</legend>
					<h2>
						<label htmlFor='terms'>Terms of Use</label>
					</h2>
					<textarea name='terms' id='terms' cols='30' rows='10' value={terms} readOnly />
					<div className='agree'>
						<input type='checkbox' name='agree' id='agree' onChange={handleCheck} />
						<label htmlFor='agree'>Agree</label>

						<span className='err'>
							<i className={!Err.agree ? '' : 'on'}>
								<FontAwesomeIcon icon={faInfoCircle} />
							</i>
							{Err.agree}
						</span>
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
									<input
										type='text'
										name='name'
										id='name'
										value={Val.name}
										onChange={handleChange}
									/>
									<span className='err'>
										<i className={!Err.name ? '' : 'on'}>
											<FontAwesomeIcon icon={faInfoCircle} />
										</i>
										{Err.name}
									</span>
								</td>
							</tr>
							{/* id */}
							<tr>
								<th scope='row'>
									<label htmlFor='id'>ID</label>
								</th>
								<td>
									<input type='text' name='id' id='id' value={Val.id} onChange={handleChange} />
									<span className='err'>
										<i className={!Err.id ? '' : 'on'}>
											<FontAwesomeIcon icon={faInfoCircle} />
										</i>
										{Err.id}
									</span>
								</td>
							</tr>
							{/* password */}
							<tr>
								<th scope='row'>
									<label htmlFor='pwd1'>PASSWORD</label>
								</th>
								<td>
									<input
										type='password'
										name='pwd1'
										id='pwd1'
										value={Val.pwd1}
										onChange={handleChange}
									/>
									<span className='err'>
										<i className={!Err.pwd1 ? '' : 'on'}>
											<FontAwesomeIcon icon={faInfoCircle} />
										</i>
										{Err.pwd1}
									</span>
								</td>
							</tr>
							{/* confirm password */}
							<tr>
								<th scope='row'>
									<label htmlFor='pwd2'>CONFIRM PASSWORD</label>
								</th>
								<td>
									<input
										type='password'
										name='pwd2'
										id='pwd2'
										value={Val.pwd2}
										onChange={handleChange}
									/>
									<span className='err'>
										<i className={!Err.pwd2 ? '' : 'on'}>
											<FontAwesomeIcon icon={faInfoCircle} />
										</i>
										{Err.pwd2}
									</span>
								</td>
							</tr>
							{/* email */}
							<tr>
								<th scope='row'>
									<label htmlFor='email'>E-MAIL</label>
								</th>
								<td>
									<input
										type='text'
										name='email'
										id='email'
										value={Val.email}
										onChange={handleChange}
									/>
									<span className='err'>
										<i className={!Err.email ? '' : 'on'}>
											<FontAwesomeIcon icon={faInfoCircle} />
										</i>
										{Err.email}
									</span>
								</td>
							</tr>
							{/* phone number */}
							<tr>
								<th scope='row'>
									<label htmlFor='phone1'>PHONE NUMBER</label>
								</th>
								<td>
									<select name='phone1' id='phone1' onChange={handleSelect}>
										<option value=''>선택하세요</option>
										<option value='010'>010</option>
									</select>
									<b> - </b>
									<input type='text' name='phone2' id='phone2' onChange={handleChange} />
									<b> - </b>
									<input type='text' name='phone3' id='phone3' onChange={handleChange} />
									<span className='err'>
										<i className={!Err.phone1 ? '' : 'on'}>
											<FontAwesomeIcon icon={faInfoCircle} />
										</i>
										{Err.phone1}
									</span>
									<span className='err'>
										<i className={!Err.phone2 ? '' : 'on'}>
											<FontAwesomeIcon icon={faInfoCircle} />
										</i>
										{Err.phone2}
									</span>
								</td>
							</tr>
						</tbody>
					</table>
					<div className='joinBtn'>
						<input
							type='submit'
							value='SIGN UP'
							onClick={() => {
								setSubmit(true);
							}}
						/>
					</div>
				</form>
			</div>
		</Layout>
	);
}

export default Join;
