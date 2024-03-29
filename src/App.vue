<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
