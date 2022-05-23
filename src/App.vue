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


<!--async mounted() {
      let KEY_API = '9016a91de1a50285b2a781b9639adbb3'
      let movies = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${KEY_API}`, (response) => {
        return response.json()
      })

      console.log(movies)
}-->