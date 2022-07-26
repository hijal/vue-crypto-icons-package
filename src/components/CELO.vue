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
      :fill="color"
      d="M399.8,546.1c136.2,0,246.6-110.4,246.6-246.6C646.4,163.4,536,53,399.8,53c-136.2,0-246.6,110.4-246.6,246.6
	C153.3,435.8,263.7,546.1,399.8,546.1z"
    />
    <path
      fill="#ffffff"
      d="M368.3,419.5c48.8,0,88.4-39.6,88.4-88.4s-39.6-88.4-88.4-88.4s-88.4,39.6-88.4,88.4S319.5,419.5,368.3,419.5z
	 M368.3,449.5c-65.4,0-118.4-53-118.4-118.4s53-118.4,118.4-118.4s118.4,53,118.4,118.4S433.6,449.5,368.3,449.5z"
    />
    <path
      fill="#ffffff"
      d="M431.4,356.4c48.8,0,88.4-39.6,88.4-88.4s-39.6-88.4-88.4-88.4c-48.8,0-88.4,39.6-88.4,88.4
	S382.6,356.4,431.4,356.4z M431.4,386.4C366,386.4,313,333.4,313,268s53-118.4,118.4-118.4s118.4,53,118.4,118.4
	S496.7,386.4,431.4,386.4z"
    />
  </svg>
</template>

<script>
export default {
  name: "CELO",
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: [String],
      default: "#f4ce6f",
    },
  },
};
</script>

<style scoped></style>
