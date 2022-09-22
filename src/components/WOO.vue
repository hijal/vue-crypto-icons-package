<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    :width="size"
    :height="size"
  >
    <path
      :fill="color"
      d="m89.31 64.73-4 13-7.38-21.21a15.1 15.1 0 0 0-14.28-10.17 15.1 15.1 0 0 0-14.28 10.17l-7 20.13-14.6-46.92H9l21.22 68a6.46 6.46 0 0 0 6.17 4.55h11.53A6.47 6.47 0 0 0 54 97.91l7.93-23a1.79 1.79 0 0 1 3.38 0l7.93 23a6.47 6.47 0 0 0 6.11 4.36h12.26a6.46 6.46 0 0 0 6.17-4.55l10.3-33Z"
    />
    <path d="M109.94 58.77 119 29.73h-18.77l-9.06 29.04h18.77z" :fill="color" />
  </svg>
</template>

<script>
export default {
  name: "WOO",
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: [String],
      default: "#000000",
    },
  },
};
</script>

<style scoped></style>
