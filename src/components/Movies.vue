<template>
    <div class="movies">
        <div v-for="(movies , index) in arrayMovies" :key="index" class="list">
            <img :src="movies.image" alt="">
            <p>{{movies.title}}</p>
            <span>{{movies.sinopse}}</span>
         </div>
         <api-movies />
    </div>
</template>

<script>
import ApiMovies from "@/components/ApiMovies.vue"

export default {
    name: 'ListMovies',
    components: {
        ApiMovies
    },
    data() {
        return {
            arrayMovies: [
                {
                    image: "/assets/mercenarios.jpg",
                    title: "Mercenários",
                    sinopse: "Um grupo de mercenários são contratados pelo governo para resolverem alguns problemas."
                },
                {
                    image: "/assets/invocacaoMal.jpg",
                    title: "Invocação do mal",
                    sinopse: "Uma casa assombrada, o que será que aconteceu aqui? Ed e Lorraine vão descobrir."
                },
                {
                    image: "/assets/vingadores.jpg",
                    title: "Vingadores",
                    sinopse: "Os heróis mais poderosos da terá se unem contra um vilão em potencial."
                },
                {
                    image: "/assets/velozesFuriosos.webp",
                    title: "Velozes e furiosos",
                    sinopse: "Conheça as verdades por trás das grandes corridas ilegais com esses pessoal especial."
                }
            ]
        }
    }
}
</script>

<style scoped>
    .movies {
        display: flex;
        flex-direction: row;
        padding: 10px;
        background: #ccc;
    }

    .list {
        width: 200px;
        height: 300px;
        background-color: rgb(236, 236, 236);
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
    }

    .list img {
        width: 150px;
        height: 230px;
    }

    .list p {
        margin-top: 10px;
        font-size: 1.3rem;
        font-weight: bold;
    }

    .list span {
        display: none;
    }
</style>