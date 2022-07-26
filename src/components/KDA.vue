<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    :width="size"
    :height="size"
    viewBox="0 0 128 128"
  >
    <path
      :fill="color"
      d="M82.55 106.68h24.28L72.16 55.63 105 21.47H80.12L50.68 52.1V21.26H29.41v85.48h21.27V77.97l7.41-7.71 24.46 36.42z"
    />
  </svg>
</template>

<script>
export default {
  name: "KDA",
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
