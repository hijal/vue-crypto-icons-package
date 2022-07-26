<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 128 128"
    :width="size"
    :height="size"
  >
    <path
      d="M80.69 73.96v28.66l25.25-14.58V59.43L80.69 73.96zM105.46 58.6 80.69 44.3 55.44 58.87l24.74 14.29 25.28-14.56zM55.44 87.39V10.8L30.06 25.45V102l25.38-14.61zM30.54 102.82l24.9 14.38 25.25-14.58-24.87-14.35-25.28 14.55z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: "BORA",
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: [String],
      default: "#26C6D3",
    },
  },
};
</script>

<style scoped></style>
