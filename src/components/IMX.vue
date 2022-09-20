<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 128 128"
    :width="size"
    :height="size"
  >
    <path
      d="m43.1 105.47 14-16.13a4.15 4.15 0 0 0 0-5.45l-3-3.45-21.75 25zm72.09-82.94h-10.73L61 72.53A4.14 4.14 0 0 0 61 78l23.89 27.5h10.74L71.14 77.29a3.1 3.1 0 0 1 0-4.08z"
      :fill="color"
    />
    <path
      d="M114.29 105.47 82.75 69.19 80 72.31a4.15 4.15 0 0 0 0 5.45l24.08 27.71zM85.55 22.53l-14.8 17a4.16 4.16 0 0 0 0 5.44l2.72 3.13 22.25-25.6zm-53.55 0 31.88 36.64 2.86-3.29a4.16 4.16 0 0 0 0-5.46L42.25 22.53zm-19.19 0 34.6 39.81a3.13 3.13 0 0 1 0 4.08l-33.94 39.05h10.16l33.64-38.7a4.16 4.16 0 0 0 0-5.44l-33.73-38.8z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: "IMX",
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
