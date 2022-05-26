<template>
    <div class="header">
        <div class="header-logo">
            <p class="logo">MyFilmes.com</p>
        </div>

        <div>
            <search-movie />
        </div>
    </div>
</template>

<script>
import searchMovie from '@/components/SearchMovie.vue'
export default {
    name: 'HeaderMovie',
    components: {
        searchMovie
    }
}
</script>

<style scoped>
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #ff4e4e;
    padding: 10px;
}

.header-logo {
    display: flex;
    align-items: center;
    justify-content: center;
}

.header-logo .logo {
    margin-left: 40px;
    font-size: 1.7rem;
    font-weight: bold;
    font-style: italic;
}
</style>
