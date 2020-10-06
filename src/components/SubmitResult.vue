<template>
  <v-container fluid>
    <v-btn
      class="mx-2"
      fab
      outlined
      dark
      large
      color="var(--main-color)"
      @click="goHome"
    >
      <v-icon dark> fa-window-close </v-icon>
    </v-btn>

    <div>
      <h2>Congratulations!</h2>
      <p>You completed the game in {{ elapsedTime }} seconds.</p>
    </div>
    <v-form>
      <v-text-field
        required
        autofocus
        dark
        clearable
        :counter="15"
        v-model="name"
        :rules="nameRules"
        label="Name"
      ></v-text-field>
      <v-btn
        color="var(--main-color)"
        class="mr-4"
        @click="
          addToDB();
          goHome();
        "
        >Submit!</v-btn
      >
    </v-form>
  </v-container>
</template>

<script>
export default {
  props: ["goHome", "elapsedTime", "gameName"],
  data() {
    return {
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
    };
  },
  methods: {
    addToDB() {
      const db = this.$firebase.firestore();
      if (this.gameName == undefined) {
        console.log("Game name is undefined");
      } else {
        db.collection(`${this.gameName}_highscores`).add({
          name: this.name,
          time: this.elapsedTime,
        });
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: var(--main-color);
  width: 100vw;
  height: 100vh;
  background-color: rgba(47, 53, 66, 0.8);

  position: absolute;

  z-index: 20;
}

.mx-2 {
  position: relative;
  left: 80%;
  top: 0;
}

.v-form {
  color: var(--main-color);

  width: 30%;
  padding: 3px 3%;
  margin-left: 35%;
  margin-right: 32%;
}
</style
>>
