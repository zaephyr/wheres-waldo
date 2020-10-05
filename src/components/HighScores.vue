<template>
    <v-container fluid>
        <h2>{{ picTitle }}</h2>
        <v-btn class="mx-2" fab outlined dark large color="var(--main-color)" @click="goHome">
            <v-icon dark> fa-window-close </v-icon>
        </v-btn>
        <table>
            <tr v-for="user in newScores" :key="user.id">
                <td>{{ user.name }}</td>
                <td>{{ user.time }}sec</td>
            </tr>
        </table>
    </v-container>
</template>
<script>
export default {
    props: ['gameName', 'picTitle', 'highScoresPage'],
    data() {
        return {
            newScores: [],
        };
    },
    methods: {
        goHome() {
            this.$emit('viewingScores', false);
        },
    },
    mounted() {
        const db = this.$firebase.firestore();
        db.collection(`${this.gameName}_highscores`)
            .orderBy('time', 'asc')
            .onSnapshot((snapshot) => {
                const newScores = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                this.newScores = newScores;
            });
    },
};
</script>
<style scoped>
.container {
    overflow: hidden;
    color: var(--main-color);
    width: 100vw;
    height: 100vh;
    background-color: rgba(47, 53, 66, 0.8);

    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
}

h2 {
    margin: 100px 0 60px 0;
}

table {
    background-color: rgba(47, 53, 66, 0.9);
    width: 30%;
    padding: 3px 3%;
    margin-left: 35%;
    margin-right: 32%;
    margin-top: -50px;
}
tr {
    display: flex;
    justify-content: space-between;
}

.mx-2 {
    position: relative;
    left: 500px;
    top: -150px;
}
</style>
