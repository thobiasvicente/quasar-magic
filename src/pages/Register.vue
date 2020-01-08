<template>
  <div class="stars">
    <div class="row q-mt-xl">
      <div class="col-sm-12 col-xs-12 col-md-12 text-center vertical-middle q-mt-xl">
        <div class="text-h3 text-white q-pt-xl text-weight-bolder">Faça login para continuar.</div>
      </div>
      <div class="col-sm-12 col-xs-12 col-md-12 text-center q-mt-lg">
        <q-btn
          class="q-px-xl q-py-xs"
          color="purple"
          label="Login com conta google"
          @click="login()"
        ></q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  methods: {
    login() {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          let token = result.credential.accessToken;
          // The signed-in user info.
          let user = result.user;
          this.$router.push("/home");
        })
        .catch(function(error) {
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
          // The email of the user's account used.
          let email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          let credential = error.credential;
          // ...
        });
    }
  }
};
</script>


<style >
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>