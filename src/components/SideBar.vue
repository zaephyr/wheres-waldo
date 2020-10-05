<template>
    <div class="side-bar">
        <h1><span style="color: var(--main-color)">See</span>-fi</h1>
        <div class="links">
            <i class="fas fa-home" @click="backHome"></i>
            <i class="fas fa-trophy" @click="viewHighScores"></i>
        </div>
        <div>
            <h3>Easy</h3>
            <div
                v-for="(char, index) in easyChars"
                :key="index"
                class="char-btn"
                :class="{ found: char.selected }"
                @click="openLink(char.url)"
            >
                <div>{{ char.name }}</div>
                <span>{{ char.film }}</span>
            </div>
        </div>
        <div>
            <h3>Medium</h3>
            <div
                v-for="(char, index) in mediumChars"
                :key="index"
                class="char-btn"
                :class="{ found: char.selected }"
                @click="openLink(char.url)"
            >
                <div>{{ char.name }}</div>
                <span>{{ char.film }}</span>
            </div>
        </div>
        <div>
            <h3>Hard</h3>
            <div
                v-for="(char, index) in hardChars"
                :key="index"
                class="char-btn"
                :class="{ found: char.selected }"
                @click="openLink(char.url)"
            >
                <div>{{ char.name }}</div>
                <span>{{ char.film }}</span>
            </div>
        </div>

        <app-submit v-if="gameFinished" :goHome="backHome" :elapsedTime="elapsedTime" :gameName="gameName"></app-submit>
    </div>
</template>
<script>
import Submit from './SubmitResult.vue';
import HighScores from './HighScores.vue';

import differenceInSeconds from 'date-fns/differenceInSeconds';
export default {
    props: ['gameStarted', 'characters', 'gameName', 'startTime'],
    components: {
        appSubmit: Submit,
        appHighScores: HighScores,
    },
    data() {
        return {
            gameFinished: false,
            charFound: [],
            endTime: '',
            elapsedTime: '',
            titles: {
                Scourge: 'Scourge of the Machines',
                Raid: 'The Raid',
                Incident: 'Incident on Line 13',
            },
        };
    },
    methods: {
        viewHighScores() {
            this.$emit('getHighScores', this.gameName);
        },
        backHome() {
            const goHome = false;
            this.gameFinished = false;
            this.$emit('updateGameStarted', goHome);
        },
        openLink(val) {
            window.open(val, '_blank');
        },
        finishGame() {
            this.gameFinished = true;
        },
    },
    computed: {
        easyChars() {
            this.charFound = [];
            this.characters.forEach((char) => {
                this.charFound.push(char.selected);
            });
            return this.characters.filter((char) => {
                return char.difficulty == 'easy';
            });
        },
        mediumChars() {
            return this.characters.filter((char) => {
                return char.difficulty == 'medium';
            });
        },
        hardChars() {
            return this.characters.filter((char) => {
                return char.difficulty == 'hard';
            });
        },
    },
    watch: {
        charFound: function(oldVal, newVal) {
            const checkArr = (sel) => {
                return sel == true;
            };
            if (this.charFound.length < 6) {
                this.gameFinished = false;
            } else if (this.charFound.every(checkArr)) {
                this.gameFinished = this.charFound.every(checkArr);
                this.endTime = Date.now();
                this.elapsedTime = differenceInSeconds(this.endTime, this.startTime);
            }
        },
    },
};
</script>

<style>
.side-bar {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    height: 100%;
    width: 10rem;

    flex-grow: 1;
}

.char-btn {
    color: #2d3436;
    padding: 10px;
    display: flex;
    flex-direction: column;
}

.char-btn span {
    color: #b2bec3;
    font-size: 12px;
}

.char-btn:hover {
    background-color: var(--main-color);
    color: #ffffff;
}

.found {
    color: #b3b3b3;
    text-decoration: line-through;
}
</style>
