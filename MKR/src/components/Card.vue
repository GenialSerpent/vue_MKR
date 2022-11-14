<template>
  <div>
    <h2>{{ dish }}</h2>
    <br />
    <p>{{ components }} складових:</p>
    <br />
    <p v-for="(ingredient, index) in ingredients" :key="index">
      {{ id }}. {{ ingredient }}
    </p>
    <button @click="$emit('remove-dish', id)">x</button>
  </div>
</template>

<script>
export default {
  name: "DishCard",
  props: {
    id: Number,
    dish: String,
    components: Number,
    ingredients: Array,
    time: Number,
    compleated: Boolean,
  },
};
</script>

<style lang="scss" scoped></style>
