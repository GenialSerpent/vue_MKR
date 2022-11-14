<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="dish" />
    <input type="text" />
    <button type="submit">Додати</button>
  </form>
</template>

<script>
export default {
  name: "pageAbout",
  data() {
    return {
      dish: "",
      components: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
