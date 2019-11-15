import TabBar from 'components/tabBar/TabBar.vue';
<template>
  <div class="add">
    <tab-bar></tab-bar>

    <div class="add-main container">
      <div class="add-title">
        编辑
      </div>

      <el-form label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              v-model="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="age"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- <div>{{name}}</div> -->
  </div>
</template>

<script>
import TabBar from "components/tabBar/TabBar.vue";
import { EditStudent } from "network/edit";

export default {
  data() {
    return {
      id: null,
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
  created() {
    const student = this.$route.query;
    this.id = student.id;
    this.name = student.name;
    this.age = student.age;
    this.value = student.gender;
    // this.student = this.$route.params.student
  },
  methods: {
    submit() {
      const student = {};
      student.id = this.id;
      student.name = this.name;
      student.age = this.age;
      student.gender = this.value == "男" ? 1 : 0;

      EditStudent(student).then(res => {
        this.$router.push("/");
      });
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
