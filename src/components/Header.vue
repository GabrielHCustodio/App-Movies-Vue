<template>
    <div class="header">
        <div class="header-logo">
            
        </div>

        <div class="header-input">
            <input type="text" placeholder="Nome do filme..." v-model="nomeFilme">
            <img :src="pesq" alt="" @click="pesquisarNome">
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderMovie',
    data() {
        return {
            pesq: '/assets/pesquisa.png',
            nomeFilme: ''
        }
    },
    methods: {
        pesquisarNome() {
            console.log(this.nomeFilme)
        }
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
