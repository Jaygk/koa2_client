import TabBar from 'components/tabBar/TabBar.vue';
<template>
  <div class="add">
    <tab-bar></tab-bar>

    <div class="add-main container">
      <div class="add-title">添加用户</div>

      <el-form label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" v-model="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="age"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="commit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import TabBar from "components/tabBar/TabBar.vue";

import { AddStudent } from "network/request";

export default {
  data() {
    return {
      name: "",
      age: "",
      options: [
        {
          value: "男",
          label: ""
        },
        {
          value: "女",
          label: ""
        }
      ],
      value: ""
    };
  },
  components: {
    TabBar
  },
  methods: {
    async commit() {
      const student = {};
      student.name = this.name;
      student.age = this.age;
      student.gender = this.value == "男" ? 1 : 0;

      await AddStudent(student);
      this.$router.push("/");
    }
  }
};
</script>
<style>
.add-title {
  margin: 20px 0;
  font-size: 32px;
}

.add .container {
  width: 1040px;
  margin: 0 auto;
}

.el-form-item {
  margin-bottom: 40px;
}

.el-input__inner {
  width: 600px;
}
</style>
