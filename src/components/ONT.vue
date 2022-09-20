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
      d="M92.85 94.83a44 44 0 0 1-75.07-30c-.27-11.61 0-44.72 0-44.72zm-57.7-61.66a44 44 0 0 1 75.07 30.05c.27 11.61 0 44.72 0 44.72z"
    />
  </svg>
</template>

<script>
export default {
  name: "ONT",
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: [String],
      default: "#2DA7BF",
    },
  },
};
</script>

<style scoped></style>
