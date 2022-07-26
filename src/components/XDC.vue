<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 128 128"
    :width="size"
    :height="size"
  >
    <path
      d="M79.32 83.92 67.76 62.27l10.6-18.1h-6.23L64.2 57.12l-7.53-12.95h-6.94L60.7 62.84 47.79 83.92h7.29l8.49-14.5 7.95 14.5h7.8z"
      :fill="color"
    />
    <path
      d="M64 115.24a51.27 51.27 0 0 1-50.82-44.83L13 69l8.59-5L13 59l.18-1.38a51.22 51.22 0 0 1 101.64 0L115 59l-8.59 5 8.59 5-.18 1.38A51.27 51.27 0 0 1 64 115.24Zm-46.43-44a47 47 0 0 0 92.86 0L98 64l12.39-7.26a47 47 0 0 0-92.86 0L30 64Z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: "XDC",
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
