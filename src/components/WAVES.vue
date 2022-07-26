<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fill-rule="evenodd">
      <circle cx="16" cy="16" :fill="color" r="16" />
      <path d="M16 6l10 10-10 10L6 16z" fill="#fff" />
    </g>
  </svg>
</template>

<script>
export default {
  name: "WAVES",
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: [String],
      default: "#0155ff",
    },
  },
};
</script>

<style scoped></style>
