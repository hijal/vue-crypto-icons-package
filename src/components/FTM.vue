<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32"
    :width="size"
    :height="size"
  >
    <g>
      <g>
        <circle :fill="color" cx="16" cy="16" r="16" />
        <g>
          <path
            fill="#fff"
            d="M17.2,12.9l3.6-2.1V15Zm3.6,9L16,24.7l-4.8-2.8V17L16,19.8,20.8,17ZM11.2,10.8l3.6,2.1L11.2,15Zm5.4,3.1L20.2,16l-3.6,2.1Zm-1.2,4.2L11.8,16l3.6-2.1Zm4.8-8.3L16,12.2,11.8,9.8,16,7.3ZM10,9.4V22.5l6,3.4,6-3.4V9.4L16,6Z"
          />
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "FTM",
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: [String],
      default: "#13b5ec",
    },
  },
};
</script>

<style scoped></style>
