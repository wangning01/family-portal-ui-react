import 'css/LogIn/main.css';
import 'css/common/util.css';
import 'vendor/bootstrap/css/bootstrap.min.css';
import 'fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import 'fonts/iconic/css/material-design-iconic-font.min.css';
import 'vendor/animate/animate.css';
import 'vendor/css-hamburgers/hamburgers.min.css';
import 'vendor/animsition/css/animsition.min.css';
import 'vendor/select2/select2.min.css';
import 'vendor/daterangepicker/daterangepicker.css';
import {useTranslation} from 'react-i18next';
import { useState } from 'react';
import {useFormik} from 'formik'




function LogIn() {
		const [username, setUsername] = useState();
		const [password, setPassword] = useState();
		const {t} = useTranslation();
		const validate = (values) => {
			const errors = {};
			if (!values.username) {
				errors.username = "Required";
			}

			if (!values.password) {
				errors.password = "Required";
			}
			return errors;
		}
		const {handleSubmit, handleChange, hanndleBlur, touched, values, errors}
			= useFormik(
				{
					initialValues: {username: '', password: ''}, 
					validate, 
					onSubmit: (values)=>{console.log(JSON.stringify(values));}
				});
		return (
			<div class="limiter">
			<div class="container-login100" >
				<div class="wrap-login100 p-l-55 p-r-55 p-t-55 p-b-54">
					<form onSubmit={handleSubmit} class="login100-form validate-form">
						<span class="login100-form-title p-b-49">
							{t('lable.familyPortal')}
						</span>

						<div class="wrap-input100 validate-input m-b-13 " >
							{/* <span class="label-input100">{t('lable.username')}</span> */}
							<i class="fa fa-user icon"></i>
							<input class="input100" type="text" name="username"  onChange={handleChange}  placeholder={t('placeholder.typeUsername')} />
							{/* <span class="focus-input100" data-symbol="&#xf206;" /> */}
							{errors.username ? <div class="error p-t-14">{errors.username}</div> : null}
						</div>
						
						
						

						<div class="wrap-input100 validate-input" >
							{/* <span class="label-input100">{t('lable.password')}</span> */}
							<i class="fa fa-lock icon"></i>
							<input class="input100" type="password" name="password"  onChange={handleChange}  placeholder={t('placeholder.typePassword')}/>
							{/* <span class="focus-input100" data-symbol="&#xf190;"></span> */}
							{errors.password ? <div class="error p-t-14">{errors.password}</div> : null}
						</div>
						
						
						<div class="text-right p-t-8 p-b-31">
						</div>
						
						<div class="container-login100-form-btn">
							<div class="wrap-login100-form-btn">
								<div class="login100-form-bgbtn"></div>
								<button class="login100-form-btn">
								{t('lable.login')}
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
    	);
}
export default LogIn;
// export default LogIn;