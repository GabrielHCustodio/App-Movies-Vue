<template>
    <div class="header-input">
        <input type="text" placeholder="Nome do filme..." v-model="nameMovie">
    </div>
</template>

<script>
export default {
    name: 'searchMovie',
    data() {
        return {
            search: '/assets/pesquisa.png',
            nameMovie: ''
        }
    },
    watch: {
        nameMovie(value) {
            this.$emitter.emit('filterMovies', { title: value })
        }
    }
}
</script>

<style scoped>
.header-input {
    margin-right: 30px;
    display: flex;
    align-items: center;
}

.header-input input[type=text] {
    width: 250px;
    height: 27px;
    padding: 10px;
    outline: none;
}

.header-input img {
    margin-left: 10px;
    width: 35px;
    cursor: pointer;
}
</style>