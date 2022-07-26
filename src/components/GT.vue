<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 128 128"
    :width="size"
    :height="size"
  >
    <path
      :fill="color"
      d="M107.64 38.5 63.47 13 19.3 38.5v51L63.47 115l44.17-25.5V62l5.06-3V40.68L83 57.82v18.36l9.31-5.37v9.84L63.47 97.3 34.63 80.65v-33.3L63.47 30.7l28.84 16.65Z"
    />
  </svg>
</template>

<script>
export default {
  name: "GT",
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: [String],
      default: "#000",
    },
  },
};
</script>

<style scoped></style>
