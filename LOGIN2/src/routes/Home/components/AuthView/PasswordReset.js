import React from 'react';

const PasswordReset = ({onViewChange}) => (

    <div>
        <h4>Şifre Sıfırla</h4>
        <form >
                <div className="mb-3">        
                    <input type="text" className="form-control"  placeholder="E-posta"/>        
                </div>
                        
                <button type="submit" className="btn">Şifre Sıfırla!</button>
                
        </form>
        <p>
                
                Üye girişi yapmak için <b><u><a href='#' onClick={() => {
                    onViewChange(1);
                }}>tıklayınız.</a></u></b>
        </p>
    </div>
)

export default PasswordReset;