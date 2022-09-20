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
      d="M38.39 109.29 12.13 64l26.26-45.29L64.65 64l-26.26 45.29zM115.87 64 89.61 18.71H75.34L101.6 64l-26.26 45.29h14.27L115.87 64z"
    />
    <path
      :fill="color"
      d="M87.76 58.59 64.63 18.71H50.35l23.13 39.88h14.28zM73.48 69.41l-23.13 39.88h14.28l23.13-39.88H73.48z"
    />
  </svg>
</template>

<script>
export default {
  name: "HIVE",
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: [String],
      default: "#E43C37",
    },
  },
};
</script>

<style scoped></style>
