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
    getUserId() {
        const { _id } = JSON.parse(sessionStorage.getItem('user'));

        return _id;
    }
    getGoogleToken() {
        const { googleToken } = JSON.parse(sessionStorage.getItem('user'));

        return googleToken;
    }
    getBackendToken() {
        const { backendToken } = JSON.parse(sessionStorage.getItem('user'));
        
        return backendToken;
    }
    setBackendToken(token) {
        let user = JSON.parse(sessionStorage.getItem('user'));
        const _id = parseJWT(token).id

        user = { 
            ...user,
             _id,
             backendToken: token 
        };
        
        sessionStorage.setItem('user', JSON.stringify(user));
    }
}

const parseJWT = (token) => {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');

    return JSON.parse(window.atob(base64));
};

export default new Auth();