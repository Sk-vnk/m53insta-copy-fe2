import react from "react"

import Signup from '../Signup/Signup';

const LogOrSign = ({ setLoggedIn }) => {
    return (
        <div className="logorsign-wrapper">
            <div className="logorsign-inner-container">
                <Signup />
            </div>
        </div>
    );
};

export default LogOrSign;