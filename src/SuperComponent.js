import React from 'react';
// <SuperComponent> salut tout le monde </SuperComponent
function SuperComponent({ children }) {
    
    const [showMessage, setShowMessage] = React.useState(false);
    return (
        <div>
            <label htmlFor="toggle">Mon super Composant</label>
            <input
                id="toggle"
                type="checkbox"
                onChange={e => setShowMessage(e.target.checked) }
                // onChange={ e => setShowMessage(!showMessage) }
                checked={ showMessage }
            />
            <div>
            { showMessage ? children : null }
                
            </div>

        </div>
    )
}

export default SuperComponent;