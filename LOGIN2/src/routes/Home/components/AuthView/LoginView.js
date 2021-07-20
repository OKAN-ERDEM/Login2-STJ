import React from 'react';

const LoginView = ({onViewChange}) => (
    <div className="cn">
        <h4>Kullanıcı Girişi</h4>
        <div className="LoginForm">
            <form >
                <div className="mb-3">        
                    <input type="text" className="form-control"  placeholder="Kullanıcı Adı"/>        
                </div>

                <div className="mb-3">        
                    <input type="password" className="form-control" placeholder="Şifre"/>
                </div>
                        
                <button type="submit" className="btn">Giriş Yap</button>
                <a href='#' onClick={() => {
                    onViewChange(3);
                }}>Şifremi Unuttum!</a> 
            </form>
            <p>
                Henüz kayıt olmadınız mı? <br/>
                Kayıt olmak için <b><u><a href='#' onClick={() => {
                    onViewChange(2);
                }}>tıklayınız.</a></u></b>
            </p>
        </div>    
    </div>
)

export default LoginView;