class Auth {
  signIn() {
    const auth2 = window.gapi.auth2.getAuthInstance()
        auth2.signIn().then(googleUser => {
        
            const profile = googleUser.getBasicProfile()
            console.log('Full Name: ' + profile.getName())
            console.log('Given Name: ' + profile.getGivenName())
            console.log('Family Name: ' + profile.getFamilyName())
            console.log('Image URL: ' + profile.getImageUrl())
            console.log('Email: ' + profile.getEmail())

            const id_token = googleUser.getAuthResponse().id_token
            console.log('ID Token: ' + id_token)

            localStorage.setItem('token', id_token);
        })
  }
  signOut() {
        const auth2 = window.gapi.auth2.getAuthInstance()

        auth2.signOut().then(function() {
            console.log('User signed out.')
        })
        
        delete localStorage['token'];
  }
  isSigned() {
        return localStorage.getItem('token') !== null
  }
  getToken() {
        return localStorage.getItem('token');
  }
}

export default new Auth();