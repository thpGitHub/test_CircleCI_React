import React from 'react';

const HidePassword = ( { children }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
        <div>
            <label htmlFor="mdp">afficher mdp</label>
            <input type="checkbox" 
                   id="mdp"
                   checked={ showPassword }
                   onChange={ e => setShowPassword(e.target.checked) }
            />
            { showPassword ? children : null }
        </div>
    )
}

export default HidePassword;