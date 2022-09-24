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
      d="M69.19 19.78H32.24a7.06 7.06 0 0 0-7.06 7.06v74.32a7.06 7.06 0 0 0 7.06 7.06h36.95A44.22 44.22 0 0 0 113.41 64a44.22 44.22 0 0 0-44.22-44.22Zm-23 20.52a6.62 6.62 0 0 1 9-2.42l29.36 16.93a10.5 10.5 0 0 0-1.75.78l-11.69 6.75-22.51-13a6.61 6.61 0 0 1-2.42-9.04Zm12.33 44.84a6.62 6.62 0 1 1-13.23 0V51.3a10 10 0 0 0 1.54 1.1l11.69 6.75Zm32.66-15L61.87 87a9.77 9.77 0 0 0 .18-1.89V71.64l22.52-13a6.61 6.61 0 1 1 6.61 11.46Z"
    />
  </svg>
</template>

<script>
export default {
  name: "PLA",
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: [String],
      default: "#43D6B4",
    },
  },
};
</script>

<style scoped></style>
