<template>
  <li>
    <span>
      <DishCard
        :id="dishes.id"
        :dish="dishes.dish"
        :components="dishes.components"
        :ingredients="dishes.ingredients"
        :time="dishes.time"
        :compleated="dishes.compleated"
        @remove-dish="removeDish"
      />
    </span>
  </li>
</template>

<script>
import DishCard from "@/components/Card.vue";
export default {
  name: "DishList",
  props: ["dishes"],
  components: { DishCard },
  methods: {
    removeDish(id) {
      this.$emit("remove-dish", id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
