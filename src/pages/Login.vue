<template>
  <div class="container">
    <div class="fixed-center text-center q-pa-md row items-start q-gutter-md">
      <q-card class="my-card shadow-10">
        <img src="https://i.ytimg.com/vi/8SHjeg1DTFs/maxresdefault.jpg"/>
        <q-card-section class="text-center">
          <q-btn color="primary" icon-right="email" label="Login With Google Account" @click="login()"/>
        </q-card-section>
        <q-card-section>{{ lorem }}</q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
  import firebase from 'firebase'

  export default {
    'methods': {
      'login' () {
        let provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = result.credential.accessToken
            // The signed-in user info.
            let user = result.user
            this.$router.push('/')
          })
          .catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code
            let errorMessage = error.message
            // The email of the user's account used.
            let email = error.email
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential
            // ...
          })
      }

    }
  }
</script>
