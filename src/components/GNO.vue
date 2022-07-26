<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 128 128"
    :width="size"
    :height="size"
  >
    <path
      d="M63.93 19.8A43.86 43.86 0 0 1 96 33.6L64.09 65.5 32 33.43A43.9 43.9 0 0 1 63.93 19.8m0-5.21a49.33 49.33 0 0 0-39 19.11l39.16 39.18 39-39a49.31 49.31 0 0 0-39.16-19.29zM43.37 70.65a12.57 12.57 0 0 0 7.92-2.8L33.52 50.08a12.64 12.64 0 0 0 9.85 20.57zm41.26 0a12.63 12.63 0 0 0 10-20.38L76.9 68a12.55 12.55 0 0 0 7.73 2.65z"
      :fill="color"
    />
    <path
      d="m106.35 38.54-8 8A17.85 17.85 0 0 1 73.18 71.7l-9 9L55 71.55a17.85 17.85 0 0 1-25.18-25.16l-8-8.06a49.41 49.41 0 1 0 84.58.21Z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: "GNO",
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
