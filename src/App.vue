<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 100%;
  height: 100vh;

  section {
    width: 100%;
    border: 1px solid #e8e8e8;
    background: #fff;
    margin-bottom: 20px;

    header {
      border-bottom: 1px solid #e8e8e8;
      background: #f5f5f5;
      padding: 10px 15px;
      font-weight: bold;
      text-align: left;

      .edit-btn {
        margin-left: 10px;
      }
    }

    .section-body {
      padding: 15px;

      .ivu-form-item {

        &.main-images .ivu-form-item-content {
          display: flex;
          flex-wrap: wrap;

          .image-uploader {
            .upload {
              margin-right: 4px;
            }
          }
        }

        .ivu-form-item-label {
          font-weight: bold;
        }

        .ivu-form-item-error-tip {
          font-size: 12px;
        }
      }

      .ivu-row {
        padding: 0 15px;

        p {
          padding: 1px 0;
          display: inline-block;

          & + i {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
