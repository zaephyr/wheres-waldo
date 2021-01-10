<template>
    <v-container>
        <div
            :style="{ 'background-image': 'url(' + gameData.src + ')' }"
            style="
        background-size: contain;
        z-index: 50;
        min-width: 800px;
        max-width: 1120px;
      "
            @click="clicked"
        >
            <img
                ref="pic"
                id="pic"
                :src="gameData.src"
                style="
          visibility: hidden;
          min-width: 800px;
          max-width: 1120px;
          width: 100%;
          object-fit: scale-down;
        "
            />
            <transition name="slide">
                <div class="click" :style="{ left: clickX + 'px', top: clickY + 'px' }" v-if="click"></div>
            </transition>

            <div
                v-for="(char, index) in characters"
                :key="index"
                :class="[char.title, { selected: char.selected }]"
                :style="{
                    left: adjustCoords(char.x) + 'px',
                    top: adjustCoords(char.y) + 'px',
                }"
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
        return {
            imageWidth: '',
            click: false,
            clickX: null,
            clickY: null,
        };
    },
    methods: {
        clicked(e) {
            if (!e.target.className) {
                this.click = true;
                this.clickX = e.layerX - 50;
                this.clickY = e.layerY - 50;
            } else {
                this.click = false;
            }
            console.log(this.clickX, this.clickY);
            console.log(e.target, 'x:' + e.layerX, 'y:' + e.layerY);
        },
        charSelected(index) {
            this.characters[index].selected = true;
        },
        checkWidth() {
            this.imageWidth = this.$refs.pic.clientWidth;
            console.log(this.imageWidth);
        },
        adjustCoords(val) {
            const percent = this.imageWidth / 1120;
            const newVal = val * percent;
            return newVal;
        },
    },
    mounted() {
        setTimeout(() => this.checkWidth(), 500);
    },
};
</script>
<style>
.container {
    position: relative;
}

.click {
    transition: ease-out;
    transition-duration: 500ms;
    float: left;
    position: absolute;
    z-index: 10;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px dashed var(--main-color);
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
