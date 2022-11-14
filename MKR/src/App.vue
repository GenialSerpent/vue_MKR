<template>
  <div>
    <form @submit.prevent="find" v-if="!finder">
      <input type="text" placeholder="Пошук" v-model="name" />
      <button type="submit" @click="finder = finder">Знайти</button>
    </form>
    <form @submit.prevent="back" v-else>
      <p>{{ name }}</p>
      <button @click="finder = !finder">Назад</button>
    </form>
    <DishList :dishes="dishes" @remove-dish="removeDish" />
  </div>
</template>

<script>
import DishList from "@/components/List.vue";

export default {
  name: "App",
  data() {
    return {
      name: "",
      finder: false,
      dishes: [
        {
          id: 1,
          dish: "борщ",
          components: 6,
          ingredients: [
            "картопля",
            "буряк",
            "сметана",
            "вода",
            "сіль",
            "перець",
          ],
          time: 63,
          compleated: false,
        },
        {
          id: 2,
          dish: "млинці",
          components: 6,
          ingredients: [
            "картопля",
            "буряк",
            "сметана",
            "вода",
            "сіль",
            "перець",
          ],
          time: 63,
          compleated: false,
        },
        {
          id: 3,
          dish: "жарке",
          components: 6,
          ingredients: [
            "картопля",
            "буряк",
            "сметана",
            "вода",
            "сіль",
            "перець",
          ],
          time: 63,
          compleated: false,
        },
      ],
      save: [],
    };
  },
  methods: {
    removeDish(id) {
      this.dishes = this.dishes.filter((d) => d.id !== id);
    },
    find() {
      this.save = this.dishes;
      this.dishes = this.dishes.filter((d) => d.dish === this.name);
    },
    back() {
      this.dishes = this.save;
    },
  },
  components: {
    DishList,
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
