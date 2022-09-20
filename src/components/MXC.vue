<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 128 128"
    :width="size"
    :height="size"
  >
    <path
      d="M105.29 16.09a8.64 8.64 0 0 0-11.82 3.13l-4.23 7.3a11.77 11.77 0 0 1 3.31-.47 12 12 0 0 1 11.64 9.15l4.24-7.32a8.64 8.64 0 0 0-3.14-11.79ZM77.9 87.46v20.77H96V56.1L77.9 87.46z"
      :fill="color"
    />
    <path
      d="M100.49 41.44a8.64 8.64 0 0 0-15.43-7.72L59.29 78.11l-17.88-29H25.19v59.11h18.1V82.09l13 20.94H65s35.35-61.27 35.49-61.59Z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'MXC',
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: [String],
      default: '#000000',
    },
  },
};
</script>

<style scoped></style>
