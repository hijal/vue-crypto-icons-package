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
      d="M44.55 54.54v8.84l9.76 5.75v34.37L25.22 85.59V43.16l-7.48-4.4v50.86l44.04 27.11V64.7L44.55 54.54zM66.22 64.7v19.37l6.86-4.01V68.61l30.06-17.7v34.71l-36.92 22.86v8.25l44.04-27.11V38.76L66.22 64.7zM73.61 46.98 64 52.64 34.6 35.33 64 19.48l36.69 19.77 7.28-4.28L64 11.27l-43.97 23.7L64 60.86l16.51-9.72-6.9-4.16z"
    />
  </svg>
</template>

<script>
export default {
  name: "GALA",
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
