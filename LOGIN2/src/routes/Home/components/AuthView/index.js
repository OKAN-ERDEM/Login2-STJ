import React from 'react';
import LoginView from './LoginView';
import SignUpView from './SignUpView';
import PasswordReset from './PasswordReset';

class AuthView extends React.Component {

    constructor(){
        super();

        //1. Giriş Ekranı
        //2. Kayıt Ekranı
        //3. Şifre Yenileme

        this.state = {
            currentView: 1
        }
    }

    changeView(newView){
        this.setState({
            currentView: newView
        })
    }

    render(){

        return this.state.currentView === 1
                            ? <LoginView onViewChange={this.changeView.bind(this)}/>
                            :this.state.currentView === 2
                            ? <SignUpView onViewChange={this.changeView.bind(this)}/>
                            : <PasswordReset onViewChange={this.changeView.bind(this)}/>
        
    }
}

export default AuthView;