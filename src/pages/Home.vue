<template>
  <div>
    <index-carousel />
  </div>
</template>

<script>
import IndexCarousel from "../components/IndexCarousel";
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          next();
        } else {
          vm.$router.push("/login");
        }
      });
    });
  },
  name: "PageIndex",
  components: { IndexCarousel },
  data() {
    return {
      data: null
    };
  },
  mounted() {
    this.loadData();
  },

  methods: {
    loadData() {
      this.$axios
        .get("https://api.magicthegathering.io/v1/formats")
        .then(response => {
          this.data = response.data;
        })
        .catch(() => {
          this.$q.notify({
            color: "negative",
            position: "top",
            message: "Loading failed",
            icon: "report_problem"
          });
        });
    }
  }
};
</script>

