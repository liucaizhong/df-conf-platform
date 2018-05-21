<template>
  <div class="activity">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './Header'

export default {
  components: {
    Header: Header,
  },
  data () {
    return {}
  }
}
</script>

<style lang="less">

</style>
