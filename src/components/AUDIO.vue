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
      d="M47.63 78.39 58.82 59a2.38 2.38 0 0 1 4.12 0l12.35 21.38A2.38 2.38 0 0 1 73.23 84H51.92a3.55 3.55 0 0 0-3.08 1.78l-8.32 14.41a2.37 2.37 0 0 0 2.06 3.56h64.86a2.37 2.37 0 0 0 2.06-3.56l-46.56-80.7a2.38 2.38 0 0 0-4.12 0l-33 57.12a2.38 2.38 0 0 0 2.06 3.56h16.66a3.58 3.58 0 0 0 3.09-1.78Z"
    />
  </svg>
</template>

<script>
export default {
  name: "AUDIO",
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
