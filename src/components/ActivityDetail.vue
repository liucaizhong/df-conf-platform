<template>
  <div class="activity-detail">
    <Form ref="form" :model="form" :rules="rules" :label-width="150">
      <section>
        <header>新建活动</header>
        <div class="section-body">
          <FormItem label="活动名称" prop="name">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Input v-model="form.name" placeholder="请输入活动名称" />
              </Col>
            </Row>
          </FormItem>
          <FormItem label="活动类型" prop="type">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Select class="activity-detail__select-type" v-model="form.type">
                <Option
                  v-for="item in activityType"
                  :value="item.key"
                  :key="item.key"
                  placeholder="请选择活动类型"
                >
                  {{ item.value }}
                </Option>
              </Select>
              </Col>
            </Row>
          </FormItem>
          <div v-if="form.type === '8'">
            策略会
          </div>
          <div v-else>
            qitahuiyi
          </div>
        </div>
      </section>
    </Form>
  </div>
</template>

<script>
import { ACTIVITYTYPE } from '@/constant'

export default {
  data () {
    return {
      activityType: ACTIVITYTYPE,
      form: {
        name: '',
        type: '0',
      },
      rules: {},
    }
  }
}
</script>

<style lang="less">
.activity-detail {
  background: #fff;

  .activity-detail__select-type {
    * {
      text-align: left;
    }
  }
}
</style>
