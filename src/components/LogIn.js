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



const LogIn = () => {
    const {t} = useTranslation('translations');
    return (
        <div class="limiter">
        <div class="container-login100" >
			<div class="wrap-login100 p-l-55 p-r-55 p-t-55 p-b-54">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-49">
						{t('lable.familyPortal')}
					</span>

					<div class="wrap-input100 validate-input m-b-23" data-validate = {t('placeholder.usernameRequired')}>
						<span class="label-input100">{t('lable.username')}</span>
						<input class="input100" type="text" name="username" placeholder={t('placeholder.typeUsername')} />
						<span class="focus-input100" data-symbol="&#xf206;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate={t('placeholder.passwordRequired')}>
						<span class="label-input100">{t('lable.password')}</span>
						<input class="input100" type="password" name="pass" placeholder={t('placeholder.typePassword')}/>
						<span class="focus-input100" data-symbol="&#xf190;"></span>
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

					{/* <div class="txt1 text-center p-t-54 p-b-20">
						<span>
							Or Sign Up Using
						</span>
					</div>

					<div class="flex-c-m">
						<a href="#" class="login100-social-item bg1">
							<i class="fa fa-facebook"></i>
						</a>

						<a href="#" class="login100-social-item bg2">
							<i class="fa fa-twitter"></i>
						</a>

						<a href="#" class="login100-social-item bg3">
							<i class="fa fa-google"></i>
						</a>
					</div>

					<div class="flex-col-c p-t-155">
						<span class="txt1 p-b-17">
							Or Sign Up Using
						</span>

						<a href="#" class="txt2">
							Sign Up
						</a>
					</div> */}
				</form>
			</div>
		</div>
	</div>
	

    );
};

export default LogIn;