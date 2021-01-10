<template>
    <div id="app">
        <div class="home-page" v-show="!gameStarted">
            <h1><span style="color: var(--main-color)">See</span>-fi</h1>
            <h3>Find listed character in these detailed illustrations</h3>
            <p>&gt;&gt; Click an image to start playing &lt;&lt;</p>
            <carousel-3d class="courousel" :count="3" :display="3" :width="270" :height="405">
                <slide v-for="image in images" :index="image.index" :key="image.index">
                    <div
                        class="home-img"
                        :style="{
                            background: 'url(' + image.src + ')',
                            'background-size': '270px',
                        }"
                    >
                        <div class="img-overlay">
                            <div class="pic-desc">
                                <h2>{{ image.title }}</h2>
                                <p>by</p>
                                <h3>{{ image.author }}</h3>
                            </div>
                            <div class="buttons">
                                <i class="fas fa-play-circle" @click="startGame(image)"></i>
                                <i class="fas fa-trophy" @click="viewHighScores(image.name)"></i>
                            </div>
                        </div>
                    </div>
                </slide>
            </carousel-3d>
        </div>
        <div class="see-fi" v-show="gameStarted">
            <app-side-bar
                :gameStarted="gameStarted"
                @updateGameStarted="update"
                @getHighScores="viewHighScores"
                :characters="characters"
                :gameName="selectPic"
                :startTime="startTime"
            ></app-side-bar>
            <div class="picture">
                <app-game
                    v-if="gameStarted"
                    :gameName="selectPic"
                    :characters="characters"
                    :gameData="images[selectPic]"
                ></app-game>
            </div>
        </div>
        <app-high-scores
            v-if="highScoresPage"
            :picTitle="this.images[this.selectPic].title"
            @viewingScores="noScores"
            :highScoresPage="highScoresPage"
            :gameName="selectPic"
        ></app-high-scores>
    </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import SideBar from './components/SideBar.vue';
import Game from './components/Game.vue';
import HighScores from './components/HighScores.vue';
import characterDB from './data/characters.json';

import img1 from '@/assets/img/sci-fi1.png';
import img2 from '@/assets/img/sci-fi2.jpg';
import img3 from '@/assets/img/sci-fi3.jpg';

export default {
    name: 'App',
    components: {
        Carousel3d,
        Slide,
        appSideBar: SideBar,
        appGame: Game,
        appHighScores: HighScores,
    },
    data() {
        return {
            gameStarted: false,
            highScoresPage: false,
            selectPic: '',
            startTime: 0,
            images: {
                Scourge: {
                    name: 'Scourge',
                    index: 0,
                    src: img1,
                    author: 'Laurie Greasley',
                    title: 'Scourge of the Machines',
                    characters: characterDB['Scourge'].characters,
                },
                Raid: {
                    name: 'Raid',
                    index: 1,

                    src: img2,
                    author: 'Josan Gonzalez & Laurie Greasley',
                    title: 'The Raid',
                    characters: characterDB['Raid'].characters,
                },
                Incident: {
                    name: 'Incident',
                    index: 2,

                    src: img3,
                    author: 'Josan Gonzalez & Laurie Greasley',
                    title: 'Incident on Line 13',
                    characters: characterDB['Incident'].characters,
                },
            },
            characters: [],
        };
    },
    methods: {
        startGame(obj) {
            this.gameStarted = true;
            this.selectPic = obj.name;
            this.startTime = Date.now();
            this.characters = JSON.parse(JSON.stringify(obj.characters));
        },
        viewHighScores(val) {
            this.selectPic = val;
            this.highScoresPage = true;
        },
        update(bool) {
            this.highScoresPage = bool;
            this.gameStarted = bool;
        },
        noScores(bool) {
            this.highScoresPage = bool;
        },
    },
};
</script>

<style>
:root {
    --main-color: #b088f9;
}

* {
    box-sizing: border-box;
}
body,
html {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    overflow: hidden;
}

#app {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.carousel {
    width: 400px;
    margin: auto;
}

.home-page {
    max-width: 550px;
    min-width: auto;
    margin: auto;
}

.home-img {
    background-repeat: no-repeat;

    width: 270px;
    height: 405px;
}

.img-overlay {
    position: absolute;
    width: 270px;

    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    z-index: 100;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: beige;

    opacity: 0;
    transition: 0.4s;
}

.img-overlay:hover {
    opacity: 1;
}

.img-overlay h2 {
    font-weight: bold;
    font-size: 22px;

    margin: 0;
}

.img-overlay p {
    font-size: 12px;
    margin: 10px 0 5px;
}

.img-overlay h3 {
    color: white;
    font-size: 14px;
    font-style: italic;
    text-align: center;
    margin-bottom: 100px;
}

.buttons {
    display: flex;
    justify-content: space-between;
}
.fas {
    cursor: pointer;
    font-size: 30px;
    padding: 10px;
}
.fas:hover {
    color: var(--main-color);
    transform: scale(1.2);
    transition: all 0.4s ease-in-out;
}
.see-fi {
    display: flex;
    height: 100vh;
}

.picture {
    flex-grow: 5;
    background: black;
    overflow: auto;
}

.pic-desc {
    display: flex;
    flex-direction: column;
    text-align: center;
}
</style>
