import { request } from "./request";

export function EditStudent(obj) {
  return request({
    url: "/edit",
    method: "post",
    data: {
      student: obj
    }
  });
}
