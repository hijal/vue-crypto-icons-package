<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 128 128"
    :width="size"
    :height="size"
  >
    <path
      d="M64 12.85A51.15 51.15 0 1 0 115.15 64 51.21 51.21 0 0 0 64 12.85Zm0 97.28A46.13 46.13 0 1 1 110.13 64 46.18 46.18 0 0 1 64 110.13Z"
      :fill="color"
    />
    <path
      d="M88.24 48.56a2.51 2.51 0 0 0 0-5H73.78V31a2.51 2.51 0 1 0-5 0v12.54h-10V31a2.51 2.51 0 1 0-5 0v12.54H39.4a2.51 2.51 0 0 0-2.51 2.51v35.42A2.51 2.51 0 0 0 39.4 84h14.31v12.89a2.51 2.51 0 0 0 5 0V84h10v12.89a2.51 2.51 0 0 0 5 0V84h14.53a2.51 2.51 0 0 0 2.5-2.51V63.1a2.5 2.5 0 0 0-2.5-2.51H56.29a2.51 2.51 0 0 0 0 5h29.44V79H41.9V48.56Z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: "GMT",
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
