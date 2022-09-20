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
      d="M111 23.29H75.08L57.31 57.94 39.53 23.29H17a1.6 1.6 0 0 0-1.42 2.34l44.35 86.48a4.57 4.57 0 0 0 8.12 0l44.35-86.48a1.6 1.6 0 0 0-1.4-2.34ZM64 110.1l-6-11.75 36.31-70.58h11.94Z"
    />
  </svg>
</template>

<script>
export default {
  name: "VGX",
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
