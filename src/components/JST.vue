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
      d="M64 64.08a42.42 42.42 0 0 1-42.37-42.37H35a29 29 0 0
    0 58 0h13.37A42.42 42.42 0 0 1 64 64.08ZM22.25 72.16h83.51v13.37H22.25z"
    />
    <circle cx="64" cy="31.97" r="9.94" :fill="color" />
    <circle cx="64" cy="102.36" r="9.94" :fill="color" />
  </svg>
</template>

<script>
export default {
  name: "JST",
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
