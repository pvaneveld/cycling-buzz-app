<template>
  <div id="app">
    <Header></Header>
    <main class="max-w-4xl h-6 my-0 mx-auto flex flex-col">
      <p class="text-gray-700 mt-20 mb-5	text-center my-0 mx-auto max-w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, in expedita. Quaerat unde ad exercitationem aliquid asperiores nihil inventore voluptates quasi tempora nobis molestiae dolor iure, eligendi delectus. Natus, accusamus?</p>
      <Article/>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Article from './components/Article.vue';

export default {
  name: 'App',
  components: {
    Header,
    Article,
  }
}
</script>

<style>
</style>
