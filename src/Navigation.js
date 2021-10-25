import React from 'react';

class Navigation extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;