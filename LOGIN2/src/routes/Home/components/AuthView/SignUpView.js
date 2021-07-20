import React from 'react';

const SignUpView = ({onViewChange}) => (

    <div>
        <h4>Kayıt Ol</h4>
        <form >
                <div className="mb-3">        
                    <input type="text" className="form-control"  placeholder="E-posta"/>        
                </div>

                <div className="mb-3">        
                    <input type="password" className="form-control" placeholder="Şifre"/>
                </div>
                        
                <button type="submit" className="btn">Kayıt Ol!</button>
                 
        </form>
        <p>
            Zaten hesabınız var mı?<br />
            O zaman giriş yapmak için <b><u><a href='#' onClick={() => {
                    onViewChange(1);
                }}>tıklayınız.</a></u></b>
        </p>
    </div>
)

export default SignUpView;