<template>
  <div class="flex items-center">
    <span
      class="hidden md:block bg-gray-600 text-white py-1 px-2 rounded mr-5 w-28 text-center"
      >{{ article.published | dateFormat }}</span
    >
    <div class="flex border-yellow-300 border-l-4 py-5 pl-10 relative">
      <div class="w-3 h-3 bg-yellow-300 absolute -left-2 top-1/2 dot"></div>
      <div class="md:w-96">
        <span
          class="md:hidden mb-2 bg-gray-600 text-white py-1 px-2 rounded mr-5 min-content text-center"
          >{{ article.published | dateFormat }}</span
        >
        <div class="mt-2">
          <Label
            v-for="cyclist in sortById(article.cyclist)"
            :text="cyclist | cyclistName"
            :key="cyclist.id"
          />
        </div>
        <a
          :href="article.url"
          target="_blank"
          class="
            hover:underline
            bg-gray-100
            rounded
            bg-black
            px-4
            py-2
            md:text-2xl
            text-xl text-gray-700
            flex
            items-center
            cursor-pointer
          "
        >
          {{ article.headline }}
          <img
            class="w-4 h-4 ml-3.5"
            src="./../assets/002-share.png"
            alt="share icon"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Label from "./Label.vue";

export default {
  components: {
    Label,
  },
  props: {
    article: Object,
  },
  methods: {
    sortById: (cyclists) => cyclists.sort((a, b) => a.id - b.id),
  },
};
</script>

<style scoped>
.dot {
  transform: translateY(-50%);
}
</style>