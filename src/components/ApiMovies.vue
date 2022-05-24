<template>
    <div>
        {{movies}}
    </div>
</template>

<script>
export default {
    name: 'ApiMovies',
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
 
        fetch('https://imdb-api.com/en/API/Top250Movies/k_3r6o2gqv', requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
}
</script>

