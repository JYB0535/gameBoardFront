// import type { AxiosRequestConfig } from "axios";
// import { getToken } from "./cookie";

// /**
//  * 현재 jwt를 쿠키에서 가져와서 인증이 포함된 헤더를 만들어 반환한다.
//  * @returns
//  */
// export const getAxiosConfig = (): AxiosRequestConfig => {
//   //매개변수 없고 반환타입은 악시오스
//   //얘는 악시오스 설정 객체를 반환하면 된다 그래서 객체 리턴

//   const token = getToken("jwt");

//   const header = {
//     headers: {
//       Authorization: "Bearer " + token,
//     },
//   };

//   return header;
//   // return {
//   //   headers: {
//   //       'Authorization': token
//   // }
// };
