<template>
  <div class="index">
    <Layout class="index__outer-layout">
      <Header
        search
        @on-search="handleSearch"
      />
      <Layout>
        <Sider
          :style="{background: '#fff'}"
          hide-trigger
        >
          <Menu
            active-name="1-0"
            theme="light"
            width="auto"
            :open-names="['1']"
            @on-select="selectMenu"
          >
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-search"></Icon>
                活动分类
              </template>
              <MenuItem name="1-0">全部活动</MenuItem>
              <MenuItem
                v-for="(item, i) in activityType"
                :key="item.key"
                :name="`1-${i+1}`"
              >
              {{ item.value }}
              </MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout class="index__inner-layout">
          <Content class="index__content">
            <Card
              v-for="item in activities"
              :key="item.id"
              class="index__content-card"
              @click.native="goActivityDetail(item.id)"
            >
              <div>
                <h3>{{ item.name }}</h3>
                <h6>{{ item.date }}</h6>
              </div>
            </Card>
          </Content>
        </Layout>
      </Layout>
    </Layout>
    <Button
      class="index__content-add-float-btn"
      type="primary"
      shape="circle"
      icon="ios-plus-empty"
      @click="addNewActivity"
    ></Button>
  </div>
</template>

<script>
import Header from './Header'
import { ACTIVITYTYPE } from '@/constant'

export default {
  components: {
    Header: Header,
  },
  data () {
    return {
      activityType: ACTIVITYTYPE,
      rawActivities: {
        '8': [{
          id: '0',
          name: '2018年度策略会',
          date: '2018-05-16',
        }],
        '1': [{
          id: '1',
          name: '【东方纺服】森马服饰投资者交流',
          date: '2018-05-16',
        }],
      },
      rawActivitiesArray: [],
      activities: [],
      type: '0',
    }
  },
  created () {
    this.rawActivitiesArray = this.objectToArray(this.rawActivities)
    this.activities = this.rawActivitiesArray
  },
  methods: {
    objectToArray (obj) {
      return Object.keys(obj).reduce((cum, key) => {
        return cum.concat(obj[key])
      }, [])
    },
    handleSearch (val) {
      if (+this.type) {
        this.activities = (this.rawActivities[this.type - 1] || []).filter(v =>
          v.name.includes(val) || v.date.includes(val)
        )
      } else {
        this.activities = this.rawActivitiesArray.filter(v =>
          v.name.includes(val) || v.date.includes(val)
        )
      }
    },
    addNewActivity () {
      this.$router.push('/new-activity')
    },
    goActivityDetail (id) {
      console.log('activity is', id)
    },
    selectMenu (name) {
      this.type = name.split`-`[1]
      if (+this.type) {
        this.activities = this.rawActivities[this.type - 1] || []
      } else {
        this.activities = this.rawActivitiesArray
      }
    },
  },
}
</script>

<style lang="less">
.index {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  height: 100%;

  .index__outer-layout {
    height: 100%;

    .index__inner-layout {
      overflow: auto
    }
  }

  .index__content {
    // margin-top: 64px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;

    .index__content-card {
      width: 180px;
      height: 120px;
      margin: 5px;
      cursor: pointer;

      .ivu-card-body {
        width: 100%;
        height: 100%;

        > div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
          height: 100%;

          h3 {
            flex: 1;
            max-height: 50px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            // position: relative;
            // line-height: 20px;
            // overflow: hidden;

          //   &::after {
          //     content: '...';
          //     position: absolute;
          //     bottom: 0;
          //     right: 0;
          //     padding-left: 40px;
          //     background: -webkit-linear-gradient(left, transparent, #fff 55%);
          //     background: -o-linear-gradient(right, transparent, #fff 55%);
          //     background: -moz-linear-gradient(right, transparent, #fff 55%);
          //     background: linear-gradient(to right, transparent, #fff 55%);
          //   }
          }

          h6 {
            flex: 0 0 20px;
          }
        }
      }
    }
  }

  .index__content-add-float-btn {
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 60px;
    height: 60px;

    > i {
      font-size: 50px;
    }
  }
}
</style>
