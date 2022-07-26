<template>
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 800 600"
    style="enable-background: new 0 0 800 600"
    xml:space="preserve"
    :width="size"
    :height="size"
  >
    <path
      d="M399.8,551.7c139.2,0,252.1-112.9,252.1-252.1c0-139.2-112.9-252.1-252.1-252.1c-139.2,0-252.1,112.9-252.1,252.1
	C147.8,438.8,260.6,551.7,399.8,551.7z"
      :fill="color"
    />
    <linearGradient
      id="SVGID_1_"
      gradientUnits="userSpaceOnUse"
      x1="289.4126"
      y1="306.5511"
      x2="548.5821"
      y2="306.5511"
      gradientTransform="matrix(1 0 0 -1 -20.9449 604.3622)"
    >
      <stop offset="0" style="stop-color: #00ccff" />
      <stop offset="1" style="stop-color: #33ff99" />
    </linearGradient>
    <path
      class="st0"
      d="M268.5,445.1L476,358.5l-65.7-66L268.5,445.1z M344.7,226.6l65.7,65.9l117.3-142L344.7,226.6z"
    />
  </svg>
</template>

<script>
export default {
  name: "RUNE",
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

<style scoped>
.st0 {
  fill: url(#SVGID_1_);
}
</style>
