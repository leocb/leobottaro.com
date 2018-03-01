<template lang="pug">
  .wrapper
    h1 Leo Bottaro's p5 playground!
    h3 Getting started
    ol
      li All the projects should be listed in the left
      li Open two projects at the same time by using the "split" mode
      li This p5 manager is made by #[a(href='https://github.com/chiunhau/' target='_blank') chiunhau], Check him out!
    h3 Anything else?
    ol
      li there will be more, be patient! ;)
      li while you're at it, follow me twitter #[a(href='https://twitter.com/SrLeoB' target='_blank') @SrLeoB]
      li also, here's #[a(href='https://github.com/leocb/' target='_blank') My Github] where this website source code is available
</template>

<script>
export default {}
</script>

<style lang="scss">
// https://material.io/color/#!/?view.left=0&view.right=0&secondary.color=0D47A1&primary.color=EEEEEE
.wrapper {
  margin: auto;
  display: inline-block;
  padding-top: 70px;
  padding-left: 70px;
  text-align: left;
  overflow-y: scroll;
  width: 100%;
  height: 100%;

  h1 {
    font-size: 80px;
    color: #0d47a1;
    margin-bottom: 0px;
  }

  code {
    font-size: 16px;
    color: #0d47a1;
    padding: 5px;
  }

  .magic {
    position: relative;
    font-size: 18px;
    color: #0d47a1;
    margin-top: -10px;
    padding-bottom: 15px;
  }

  h3 {
    color: rgba(0, 0, 0, 0.85);
    margin-top: 40px;
    margin-bottom: 0px;
  }

  ol {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.85);
    padding-left: 0px;
    margin-top: 0;
  }

  li {
    margin-top: 8px;
  }

  a {
    color: #0d47a1;

    &:hover {
      color: #5472d3;
    }
  }

  p:after {
    content: '';
    position: absolute;
    width: 100%;
    background-color: #0d47a1;
    height: 2px;
    bottom: 0px;
    left: 0;
  }
}
</style>
