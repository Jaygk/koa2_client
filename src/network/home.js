import {request} from "./request";

export function getStudentsList() {
  return request({
    url: '/students'
  })
}

export function deleteStudent(id) {
  return request({
    url: "/delete",
    params: {
      id
    }
  });
}