import axios from 'axios';

(axios.defaults.baseURL = 'http://127.0.0.1:3000'), (axios.defaults.timeout = 5000); // axios 默认配置

axios.interceptors.response.use( // axios拦截器
  res => {
    return res.data;
  },
  err => {
    throw err;
  }
);

/**
 * type: get
 * params: null
 * @ 获取学生列表数据
 */
export function getStudentsList() {
  return axios.get('/api/students');
}

/**
 * type: delete
 * params: id
 * @ 删除对应id学生信息
 */
export function deleteStudent(id) {
  return axios.delete('/api/delete', {
    data: {
      id,
    },
  });
}

/**
 * type: put
 * params: obj
 * @ 更新学生信息
 */
export function EditStudent(obj) {
  return axios.put('/api/edit', {
    student: obj,
  });
}

/**
 * type: post
 * params: obj
 * @ 提交学生信息(添加学生)
 */
export function AddStudent(obj) {
  return axios.post('/api/add', {
    student: obj,
  });
}
