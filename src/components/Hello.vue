<template>
  <div class='hello'>
    <h1>{{ msg }}</h1>
    <h2>You're early, there's nothing here yet. Come back later :)</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: "Welcome to Leo Bottaro's PWA"
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #ff5722;
}
</style>
