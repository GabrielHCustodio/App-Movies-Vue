<template>
    <div class="movies">
        <div v-for="m in movies" :key="m.rank" class="box">
            <img class="image" :src="m.image" alt="">
            <p class="title">{{m.title}}</p>
         </div>
    </div>
</template>

<script>
export default {
    name: 'ListMovies',
    data() {
        return {
            movies: ''
        }
    },
    mounted() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
 
        fetch('https://imdb-api.com/en/API/Top250Movies/k_pm2rbkhw', requestOptions)
        .then(response => response.json())
        .then(result => {
            this.movies = result.items

            console.log(this.movies)
        })
        .catch(error => console.log('error', error));

        this.$emitter.on('filterMovies' , (nameMovie) => {
                let search = this.movies.filter(req => req.title.toLowerCase().includes(nameMovie.toLowerCase()))

                console.log(search)
        })
    }
}
</script>

<style scoped>
    .movies {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .box {
        width: 200px;
        height: 330px;
        background-color: #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        margin: 10px 10px 10px 0;
    }

    .box .image{
        margin-top: 20px;
        width: 150px;
    }

    .box .title {
        color: black;
        font-size: 1.3rem;
        font-weight: bold;
        margin-top: 10px;
    }
</style>