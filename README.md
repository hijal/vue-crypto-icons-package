<span align="center">
  <h1>Feel Free to contribute</h1>
</span>

Usage example:

## Install
[![npm](https://img.shields.io/npm/dm/vue-crypto-icons)](https://www.npmjs.com/package/vue-crypto-icons)

```sh
npm i vue-crypto-icons
```

## Usage

```js
<template>
  <div>
    <BTC size="50" color="yellow" />
    <ETH size="50" color="#B2A4FF" />
  </div>
</template>

<script>
import { BTC, ETH } from "vue-crypto-icons";

export default {
  ...
  components: {
    BTC, 
    ETH
  },
  ...
};
</script>
```
