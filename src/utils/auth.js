class Auth {
    init() {
        const _onInit = auth2 => {
            console.log('init OK')
        }

        const _onError = err => {
            console.log('error', err)
        }

        window.gapi.load('auth2', function() {
            window.gapi.auth2
                .init({ 
                    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                })
                .then(_onInit, _onError)
        })
    }
    signIn() {
        return new Promise((resolve, reject) => {
            const auth2 = window.gapi.auth2.getAuthInstance();

            auth2.signIn()
                .then(googleUser => {
                    const profile = googleUser.getBasicProfile();
                    const googleToken = googleUser.getAuthResponse().id_token;
                    const username = profile.getGivenName();

                    const user = {
                        googleToken,
                        username
                    };

                    sessionStorage.setItem('user', JSON.stringify(user));
                    
                    resolve(googleToken);
                })
        })
    }
    signOut() {
        const auth2 = window.gapi.auth2.getAuthInstance()

        auth2.signOut();
        
        delete sessionStorage['user'];
    }
    isSigned() {
        return sessionStorage.getItem('user') !== null
    }
    getUsername() {
        const { username } = JSON.parse(sessionStorage.getItem('user'));
        
        return username;
    }
    getGoogleToken() {
        const user = JSON.parse(sessionStorage.getItem('user'));

        return user.googleToken;
    }
    getBackendToken() {
        const user = JSON.parse(sessionStorage.getItem('user'));
        
        return user.backendToken;
    }
    setBackendToken(backendToken) {
        let user = JSON.parse(sessionStorage.getItem('user'));

        user = { ...user, backendToken };
        
        sessionStorage.setItem('user', JSON.stringify(user));
    }
}

export default new Auth();