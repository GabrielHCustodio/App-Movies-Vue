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
            movies: '',
            moviesTitle: ''
        }
    },
    mounted() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
 
        fetch('https://imdb-api.com/en/API/Top250Movies/k_3r6o2gqv', requestOptions)
        .then(response => response.json())
        .then(result => {
            this.moviesTitle = result.items
            this.movies = result.items
        })
        .catch(error => console.log('error', error));

        this.$emitter.on('filterMovies' , (nameMovie) => {

            let nameSearch = nameMovie.title          
            let search = this.moviesTitle.filter(req => req.title.toLowerCase().includes(nameSearch.toLowerCase()))
            
            if(search.length > 0) {
                this.movies = search
            } else {
                this.movies = this.moviesTitle
            }
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
        background-color: #ccc;
    }

    .box {
        width: 200px;
        height: 330px;
        background-color: #ffffff;
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