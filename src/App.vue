<template>
  <div>
    <header-movie />
    <list-movies />
  </div>
</template>

<script>
import HeaderMovie from "@/components/Header.vue"
import ListMovies from "@/components/Movies.vue"

export default {
  name: 'App',
  components: {
    HeaderMovie,
    ListMovies
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>