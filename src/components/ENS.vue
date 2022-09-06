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
      d="M94.84 97.49c-7.35 5.36-22.56 15.79-28.19 19.64a.56.56 0 0 1-.79-.75l30-48.94a27 27 0 0 1 4 7.1c2.59 6.66 3.73 16.56-5.02 22.95zm3.32-36.59C87 43.76 66.06 11.64 66.06 11.64a.56.56 0 0 1 .79-.77l28 19.47a41 41 0 0 1 12.41 53.48s.23-8.55-9.1-22.92zm-65-30.39c7.35-5.36 22.56-15.79 28.19-19.64a.56.56 0 0 1 .79.75l-30 48.94a27 27 0 0 1-4.05-7.1c-2.54-6.66-3.68-16.56 5.07-22.95zM29.84 67.1c11.13 17.14 32.1 49.26 32.1 49.26a.56.56 0 0 1-.79.77l-28-19.47a41 41 0 0 1-12.4-53.48s-.24 8.55 9.09 22.92z"
    />
  </svg>
</template>

<script>
export default {
  name: "ENS",
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: [String],
      default: "#24292f",
    },
  },
};
</script>

<style scoped></style>
