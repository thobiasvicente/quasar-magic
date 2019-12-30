<template>
  <div class="row">
    <div class="col-xs-12">
      <q-carousel
        animated
        v-model="slide"
        arrows
        infinite
        autoplay
        transition-prev="slide-right"
        transition-next="slide-left"
      >
        <q-carousel-slide name="first"
                          img-src="https://media.magic.wizards.com/images/featured/EN_EventTypes_Header.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Trade Cards</div>
            <div class="text-subtitle1">with other people</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="second" img-src="https://media.magic.wizards.com/Events-Nationals-Header.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Be a Challenger</div>
            <div class="text-subtitle1">win pro leagues</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="third"
                          img-src="http://tradingcardgames.com/wp-content/uploads/2015/12/IMG_20120626_141136.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Share your Collection</div>
            <div class="text-subtitle1">show yours cards collection</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        slide: 'first'
      }
    }
  }
</script>

<style scoped>
  .custom-caption {
    text-align: center;
    padding: 12px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
  }
</style>
