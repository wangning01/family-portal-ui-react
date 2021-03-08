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
import {withTranslation} from 'react-i18next';
import { Component } from 'react';




class LogIn extends Component{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
		}
	}
	render(){
		const {t} = this.props;
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
							<input class="input100" type="text" name="username" value={this.username} placeholder={t('placeholder.typeUsername')} />
							<span class="focus-input100" data-symbol="&#xf206;"></span>
						</div>

						<div class="wrap-input100 validate-input" data-validate={t('placeholder.passwordRequired')}>
							<span class="label-input100">{t('lable.password')}</span>
							<input class="input100" type="password" name="pass" value={this.password} placeholder={t('placeholder.typePassword')}/>
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
					</form>
				</div>
			</div>
		</div>
    );
				}
};
export default withTranslation()(LogIn);
// export default LogIn;