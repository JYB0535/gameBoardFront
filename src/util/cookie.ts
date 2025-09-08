// /**
//  * 브라우저 쿠키에서 특정 쿠키 값 가져오기
//  * @param name 가져올 쿠키 이름
//  * @returns 쿠키 값 또는 null
//  */
// export function getToken(name: string): string | null {
//   const cookieString = `; ${document.cookie}`;
//   const parts = cookieString.split(`; ${name}=`);

//   if (parts.length === 2) {
//     return parts.pop()!.split(";").shift() || null;
//   }

//   return null;
// }
