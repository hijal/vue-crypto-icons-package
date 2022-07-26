<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 128 128"
    :width="size"
    :height="size"
  >
    <path
      d="m97.59 26.65-32.87-13.3-32.27 78.03 65.14-64.73zM100.57 28.45 65.81 63.07l35 35c6.27-7.75 14-20.39 13.61-35.13-.53-19.82-10.42-31.11-13.85-34.49zM26 97.68l34-81.83-47.52 47s-1.19 8.43 3.84 20.28A47.39 47.39 0 0 0 26 97.68zM63.41 65.45 29.35 99.37l-.15.35 34.01 13.87 34.34-14-34.14-34.14z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: "KLAY",
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
