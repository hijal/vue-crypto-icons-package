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
      d="M76.77 19.51a1.47 1.47 0 0 0-.1-2.16A20.37 20.37 0 0 0 49 18.44L18.43 49a20.38 20.38 0 0 0-1.09 27.63 1.48 1.48 0 0 0 2.17.11zm32.8 30.65L93.89 34.48a10.19 10.19 0 0 0-14.41 0L28.3 85.66a1.47 1.47 0 0 0 0 2.06l6.15 6.15a10.19 10.19 0 0 0 14.41 0L85.23 57.5a1.45 1.45 0 0 1 2.06 0l.5.5a10.19 10.19 0 0 1 0 14.4l-36.3 36.3a1.48 1.48 0 0 0 .12 2.18A20.37 20.37 0 0 0 79 109.57L109.57 79a20.38 20.38 0 0 0 0-28.84z"
    />
  </svg>
</template>

<script>
export default {
  name: "SXP",
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
