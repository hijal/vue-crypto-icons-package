<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 128 128"
    :width="size"
    :height="size"
  >
    <path
      d="M31.88 21.35h15v85.29h-15zM105.83 106.65H87.31L54.97 64l32.8-42.65h18.58L74.17 64l31.66 42.65z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: "KAVA",
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: [String],
      default: "#F35C5F",
    },
  },
};
</script>

<style scoped></style>
