import React, { Component } from 'react';

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '871583865315-17hg2h5e6npmvfj6phpc37fcr57c2qp8.apps.googleusercontent.com',
                scope: 'email' // not currently used, just an example of scope
            });
        });
    }

    render() {
        return (
            <div>
                Google Auth
            </div>
        )
    }
}

export default GoogleAuth;
