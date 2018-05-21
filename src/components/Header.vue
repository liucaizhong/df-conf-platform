<template>
  <Header class="header">
    <div class="logo">
      <img src="../assets/logo.png" />
    </div>
    <div v-if="search" class="search-bar">
      <Input
        v-model="searchValue"
        @on-enter="onSearch(searchValue)"
        placeholder="输入关键字搜索活动"
      >
      <Icon slot="prepend" type="ios-search" />
      </Input>
    </div>
    <div class="header-bar">
      <Dropdown class="user-dropdown" placement="bottom-end">
        <a href="javascript:void(0)">
          <Avatar
            shape="circle"
            icon="person"
          />
          <span class="user-name">{{ userName }}</span>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>
            <Icon type="android-person" />
            个人中心
          </DropdownItem>
          <DropdownItem divided>
            <Icon type="log-out" />
            退出登录
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </Header>
</template>

<script>
export default {
  props: {
    search: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      userName: 'lcz',
      searchValue: '',
    }
  },
  methods: {
    onSearch (val) {
      this.$emit('on-search', val)
    }
  }
}
</script>

<style lang="less">
.header {
    // position: fixed;
    width: 100%;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    padding: 0;
    border-bottom: 1px solid #dddee1;
    display: flex;
    justify-content: flex-end;

    .logo {
      width: 40px;
      height: 40px;
      align-self: center;
      position: absolute;
      left: 20px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .search-bar {
      width: 200px;
      margin-right: 10px;
      align-self: center;
    }

    .header-bar {
      float: right;
      height: 100%;
      margin-right: 10px;

      .user-dropdown {

        &:hover{
          background: rgba(0,0,0,.1);
        }

        a:first-child {
          padding-left: 10px;
        }

        .user-name {
          color: #fff;
          font-size: 16px;
          padding: 0 10px 0 5px;
          vertical-align: middle;
        }
      }
    }
  }
</style>
