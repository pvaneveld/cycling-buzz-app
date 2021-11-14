<template>
  <a
    href="#"
    class="
      inline-block
      rounded-full
      text-gray-800
      bg-yellow-300
      hover:bg-gray-500
      duration-300
      md:text-sm
      text-xs
      font-bold
      mr-1
      md:mr-2
      mb-4
      px-2
      md:px-4
      py-1
      opacity-90
      hover:opacity-100
    "
  >
    <img class="w-4 h-4 mr-1 inline-block -top-0.5 relative" src="./../assets/003-cyclist.png" alt="">
    {{text}}
  </a>
</template>

<script>
export default {
  props: {
    text: String,
  }
}
</script>