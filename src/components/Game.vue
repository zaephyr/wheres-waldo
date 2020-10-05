<template>
    <v-container>
        <div
            :style="{ 'background-image': 'url(' + gameData.src + ')' }"
            style="height: auto; width: 1120px; background-size: contain; z-index: 50"
            @click="clicked"
        >
            <img :src="gameData.src" style="visibility: hidden; width: 1120px; object-fit: contain" />

            <div
                v-for="(char, index) in characters"
                :key="index"
                :class="[char.title, { selected: char.selected }]"
                :style="{ left: char.x + 'px', top: char.y + 'px' }"
                class="char-selection"
                @click="charSelected(index)"
            >
                {{ char.name }}
            </div>
        </div>
    </v-container>
</template>
<script>
export default {
    props: ['characters', 'gameName', 'gameData'],
    data() {
        return {};
    },
    methods: {
        clicked(e) {
            console.log('x:' + e.layerX, 'y:' + e.layerY);
        },
        charSelected(index) {
            this.characters[index].selected = true;
        },
    },
};
</script>
<style>
.container {
    position: relative;
}

.char-selection {
    font-size: 0;
    /* border: 1px solid var(--main-color); */
    float: left;
    position: absolute;
    z-index: 10;
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.selected {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px dashed var(--main-color);
}

.selected:hover {
    font-size: inherit;
    background-color: beige;
    transition: all ease-in-out 0.4s;
}
</style>
