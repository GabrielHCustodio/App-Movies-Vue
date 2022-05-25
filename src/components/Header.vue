<template>
    <div class="header">
        <div class="header-logo">
            
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
    background: rgb(0, 110, 255);
    padding: 10px;
}

.header-logo {
    width: 140px;
    height: 60px;
    background: #ccc;
    margin-left: 30px;
}
</style>
