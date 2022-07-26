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
      d="M49.02 21.98v84.04L14.01 77.88l35.01-55.9zM50.34 105.46l69.95-42.84H75.08l9.56 15.36-34.3 27.48z"
    />
  </svg>
</template>

<script>
export default {
  name: "LRC",
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: [String],
      default: "#2C76FB",
    },
  },
};
</script>

<style scoped></style>
