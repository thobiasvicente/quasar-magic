<template>
  <div style="background-color: #444AB4">
    <index-carousel/>
    <vue-particles
      color="#1d1d1d"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    />

  </div>

</template>

<script>
  import IndexCarousel from '../components/IndexCarousel'



  export default {
    name: 'PageIndex',
    components: { IndexCarousel},
    data () {
      return {
        data: null,
      }
    },
    mounted () {
      this.loadData()
    },

    methods: {
      loadData () {
        this.$axios.get('https://api.magicthegathering.io/v1/formats')
          .then((response) => {
            this.data = response.data
          })
          .catch(() => {
            this.$q.notify({
              color: 'negative',
              position: 'top',
              message: 'Loading failed',
              icon: 'report_problem'
            })
          })
      },
    }
  }
</script>

