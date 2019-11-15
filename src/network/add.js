import {request} from "./request";

export function AddStudent(obj) {
    return request({
      url: '/add',
      method: 'post',
      data: {
        student: obj
      }
    })
  }