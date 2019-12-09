<template>
  <div>
    <tab-bar></tab-bar>
    <div class="users-table">
      <div class="title">
        <h1>用户管理</h1>
        <router-link to="/add" tag="span">添加</router-link>
      </div>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="index" label="编号" width="220" type="index"></el-table-column>
        <el-table-column prop="name" label="姓名" width="220"></el-table-column>
        <el-table-column prop="gender" label="性别" width="220"></el-table-column>
        <el-table-column prop="age" label="年龄" width="220"></el-table-column>
        <el-table-column prop="handle" label="操作" width="220">
          <template slot-scope="scope">
            <el-button size="mini" @click="toEdit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="deleteItem(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import TabBar from "components/tabBar/TabBar.vue";
import { getStudentsList, deleteStudent } from "network/request";

export default {
  data() {
    return {
      tableData: []
    };
  },
  components: {
    TabBar
  },
  methods: {
    toEdit(row) {
      // console.log(row)//row中就包含了你点击的那一行的数据
      // console.log(row.id);
      this.$router.push({
        path: "/edit",
        query: {
          id: row.id,
          name: row.name,
          gender: row.gender,
          age: row.age
        }
      });
    },
    async _getStudentsList() {
      const res = await getStudentsList();
      res.students.map(item => {
        item.gender = item.gender == 1 ? "男" : "女";
      });
      this.tableData = res.students;
    },

    async deleteItem(row) {
      await deleteStudent(row.id)
      this.$router.go(0);
    }
  },
  created() {
    this._getStudentsList();
  }
};
</script>
<style>
.users-table {
  width: 1140px;
  margin: 0 auto;
}

.title {
  display: flex;
  height: 50px;
  margin: 10px 0;
  align-items: center;
}

.title h1 {
  font-size: 32px;
  font-weight: normal;
  margin-right: 15px;
}

.title span {
  font-size: 16px;
  color: blue;
}

.el-table {
  margin-top: 20px;
}

.el-table td,
.el-table th {
  height: 70px;
  text-align: center;
  font-size: 17px;
}
</style>
