<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 128 128"
    :width="size"
    :height="size"
  >
    <path
      d="M104.29 54.27V34.13H94.23V24.05H74.09V13.68H53.95v10.37H33.81v10.08h-10.1v59.96h10.1v9.86h20.14v10.37h20.14v-10.37h20.14V93.87h10.06V73.73H84.16v10.08H74.09v10.37H53.95V83.81H43.84V44.19h10.11V33.82h20.14v10.37h10.07v10.08h20.13z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: "CVX",
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
