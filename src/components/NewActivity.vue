<template>
  <div class="new-activity">
    <Layout>
      <Header />
      <Content class="new-activity__content">
        <ActivityDetail :method="1" />
      </Content>
    </Layout>
  </div>
</template>

<script>
import Header from './Header'
import ActivityDetail from './ActivityDetail'

export default {
  components: {
    Header: Header,
    ActivityDetail: ActivityDetail,
  },
}
</script>

<style lang="less">
.new-activity {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  height: 100%;

  .ivu-layout {
    height: 100%;

    .new-activity__content {
      padding: 10px;
    }
  }
}
</style>
