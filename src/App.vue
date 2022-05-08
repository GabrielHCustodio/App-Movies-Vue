<template>
  <div>

  </div>
</template>

<script>

export default {
  name: 'App',
  async mounted() {
      let KEY_API = '9016a91de1a50285b2a781b9639adbb3'
      let movies = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${KEY_API}`, (response) => {
        return response.json()
      })

      console.log(movies)
  }
}
</script>

<style>
</style>
