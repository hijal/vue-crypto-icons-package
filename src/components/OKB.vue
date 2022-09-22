<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 128 128"
    :width="size"
    :height="size"
  >
    <rect
      width="28.67"
      height="28.67"
      x="49.67"
      y="49.67"
      rx="1.1"
      :fill="color"
    />
    <rect width="28.67" height="28.67" x="21" y="21" rx="1.1" :fill="color" />
    <rect
      width="28.67"
      height="28.67"
      x="78.33"
      y="21"
      rx="1.1"
      :fill="color"
    />
    <rect
      width="28.67"
      height="28.67"
      x="21"
      y="78.33"
      rx="1.1"
      :fill="color"
    />
    <rect
      width="28.67"
      height="28.67"
      x="78.33"
      y="78.33"
      rx="1.1"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: "OKB",
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
