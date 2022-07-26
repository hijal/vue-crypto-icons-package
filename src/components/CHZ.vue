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
      d="M109.66 19.72a6.77 6.77 0 0 0-13.08-2.48H31.42a6.78 6.78 0 1 0-6.75 9.24l14.82 33.93a6.77 6.77 0 0 0 4.87 11.14l15.36 35.16a6.78 6.78 0 1 0 8.56 0l15.36-35.16a6.77 6.77 0 0 0 4.86-11.14l14.83-33.93a6.78 6.78 0 0 0 6.33-6.76Zm-79.32 7.67 29.6 22.55L48.12 59a6.8 6.8 0 0 0-4.37-.88Zm1.13-5.32h65.05L63.93 46.91 31.44 22.16Zm19.66 40.66L63.93 53l12.91 9.84A6.78 6.78 0 0 0 79 70l-15 34.4L49 70a6.79 6.79 0 0 0 2.13-7.27Zm33.12-4.66a6.81 6.81 0 0 0-4.45.93l-11.89-9 29.83-22.78Z"
    />
  </svg>
</template>

<script>
export default {
  name: "CHZ",
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
