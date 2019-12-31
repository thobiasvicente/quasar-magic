<template>
  <div style="height:100%">
    <div class="wrap-banner q-mb-xl">
      <div class="main-title" style="z-index:999">
        <div class="text-center">
          <div class="text-white text-h1 q-pa-sm">Magic</div>
          <div class="text-white text-h1 q-pa-sm">Trade Cards</div>
          <div class="q-pa-md">
            <q-btn color="white" text-color="black" label="Começar" type="a" href="#div-id" v-smooth-scroll="{ duration: 3000, offset: -50 }"/>
          </div>
        </div>
      </div>

      <vue-particles
        color="#ffffff"
        particleopacity="0.7"
        linescolor="#ffffff"
        particlesnumber="80"
        shapetype="circle"
        particlesize="5"
        lineswidth="2"
        linelinked="true"
        lineopacity="0.4"
        linesdistance="150"
        movespeed="3"
        hovereffect="true"
        hovermode="grab"
        clickeffect="true"
        clickmode="push"
        class="stars"
      />
    </div>
    <index-chat />
    <index-post />
    <index-search-price />



  </div>
</template>

<script>
import firebase from "firebase";
import IndexChat from "../components/Index/IndexChat";
import IndexPost from "../components/Index/IndexPost"
import IndexSearchPrice from "../components/Index/IndexSearchPrice"


export default {
  components: { IndexChat, IndexPost, IndexSearchPrice }
  
};
</script>

<style>
header {
  background-color: rgba(35, 25, 68, 0.9);
  color: #ffffff;
  display: block;
  font-family: "Montserrat", sans-serif;
  height: 50px;
  position: relative;
  z-index: 5;
}
h2 {
  margin-top: 30px;
  text-align: center;
}
header h2 {
  font-size: 22px;
  margin: 0 auto;
  padding: 10px 0;
  width: 80%;
  text-align: center;
}
header a,
a:visited {
  text-decoration: none;
  color: #fcfcfc;
}

@keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}
@-webkit-keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}
@-moz-keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}
@-ms-keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}

@keyframes move-clouds-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 10000px 0;
  }
}
@-webkit-keyframes move-clouds-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 10000px 0;
  }
}
@-moz-keyframes move-clouds-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 10000px 0;
  }
}
@-ms-keyframes move-clouds-back {
  from {
    background-position: 0;
  }
  to {
    background-position: 10000px 0;
  }
}

.wrap-banner {
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  height: 100%;
  -webkit-box-pack: center;
  justify-content: center;
}

html,
body,
#q-app {
  width: 100%;
  direction: ltr;
  height: 100%;
}
</style>
