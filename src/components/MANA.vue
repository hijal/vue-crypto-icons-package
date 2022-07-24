<template>
  <svg
    version="1.1"
    id="layer"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="100"
    height="200"
    viewBox="0 0 652 652"
    style="enable-background: new 0 0 652 652"
    xml:space="preserve"
  >
    <linearGradient
      id="world_1_"
      gradientUnits="userSpaceOnUse"
      x1="-134.9229"
      y1="603.2715"
      x2="-144.7438"
      y2="593.4506"
      gradientTransform="matrix(36 0 0 -36 5355 21862)"
    >
      <stop offset="0" stop-color="#FF2D55" />
      <stop offset="1" stop-color="#FFBC5B" />
    </linearGradient>
    <circle id="world" :fill="color" cx="321" cy="321" r="250" />
    <linearGradient
      id="shadow_2_"
      gradientUnits="userSpaceOnUse"
      x1="-111.5336"
      y1="592.9778"
      x2="-111.5336"
      y2="579.0889"
      gradientTransform="matrix(11.25 0 0 -13.5 1581.0031 8238.7002)"
    >
      <stop offset="0" stop-color="#a524b3" />
      <stop offset="1" stop-color="#ff2d55" />
    </linearGradient>
    <polygon
      id="shadow"
      class="st1"
      points="248.1,233.5 248.1,421 404.4,421 "
    />
    <polygon
      id="light"
      fill="#ffffff"
      points="91.9,421 248.1,421 248.1,233.5 "
    />
    <path
      id="end"
      :fill="color"
      d="M171,521c41.8,31.4,93.8,50,150,50s108.3-18.6,150-50H171z"
    />
    <path
      id="horizon"
      fill="#fc9965"
      d="M121,471c14.3,18.9,31.1,35.8,50,50h300c18.9-14.3,35.8-31.1,50-50H121z"
    />
    <path
      id="ground"
      fill="#ffbc5b"
      d="M406.4,421H91.9c7.8,17.9,17.6,34.6,29.1,50h285.5v-50H406.4z"
    />
    <linearGradient
      id="shadow_3_"
      gradientUnits="userSpaceOnUse"
      x1="-81.203"
      y1="578.8687"
      x2="-81.203"
      y2="564.9798"
      gradientTransform="matrix(8.253 0 0 -9.9 1133.8558 6064.2998)"
    >
      <stop offset="0" style="stop-color: #a524b3" />
      <stop offset="1" style="stop-color: #ff2d55" />
    </linearGradient>
    <polygon
      id="shadow_1_"
      class="st6"
      points="406.4,333.5 406.4,471 521,471 "
    />
    <polygon
      id="light_1_"
      fill="#ffffff"
      points="291.9,471 406.4,471 406.4,333.5 "
    />
    <path
      fill="#ffc95b"
      d="M406.4,171c34.5,0,62.5,28,62.5,62.5s-28,62.5-62.5,62.5s-62.5-28-62.5-62.5S371.9,171,406.4,171z
    M248.1,133.5
    c17.3,0,31.3,14,31.3,31.3s-14,31.3-31.3,31.3s-31.3-14-31.3-31.3S230.9,133.5,248.1,133.5z"
    />
  </svg>
</template>

<script>
export default {
  name: "MANA",
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: [String],
      default: "#ff2d55",
    },
  },
};
</script>

<style scoped>
.st1 {
  fill: url(#shadow_2_);
}
.st6 {
  fill: url(#shadow_3_);
}
</style>
