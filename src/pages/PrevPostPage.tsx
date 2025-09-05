// import { useState } from "react";
// import { addPost } from "../api/postApi";


// export default function PostPage() {
//   const [form, setForm] = useState({
     
//     name: "",
//     date: "",
//     postName: "",
//     view: 0,
//     contents: "",
//     img: ""
//   });

//   // 입력값 변경 핸들러
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // //이미지 파일 변경 핸들러
//   // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   if (e.target.files && e.target.files.length > 0) {
//   //     setForm((prev) => ({
//   //       ...prev,
//   //       img: e.target.files![0],
//   //     }));
//   //   }
//   // };

//   // 제출 핸들러
//   const handleSubmit =async (e: React.FormEvent) => {
//   e.preventDefault();
//   console.log("작성된 글:", form);

//   try {
//     const result = await addPost(form);
//     console.log("서버 응답:", result);
//     // 성공 시 알림 또는 페이지 이동 등 추가 처리 가능
//   } catch (error) {
//     console.error("업로드 실패:", error);
//   }
// };

  
  

//   return (
//     <div style={{ maxWidth: "1000px", maxHeight:"800px", margin: "0 auto" }}>
//       <h2>글 작성</h2>
//       <form onSubmit={handleSubmit}>
//         {/* 제목 */}
//         <div>
//           <input
//             type="text"
//             name="postName"
//             placeholder="제목"
//             value={form.postName}
//             onChange={handleChange}
//             style={{ width: "500px", height: "30px", padding: "8px", marginBottom: "12px" }}
//             required // 필수 입력값이라는 의미입니다!
//           />
//         <input
//               type="number"
//               name="view"
//               placeholder="조회수"
//               value={form.view}
//               onChange={handleChange}
//               style={{ width: "500px", height: "30px", padding: "8px", marginBottom: "12px" }}
//               required
//             />

//         </div>


//         {/* 내용 */}
//         <div>
//           <textarea
//             name="contents"
//             placeholder="내용을 입력하세요"
//             value={form.contents}
//             onChange={handleChange}
//             style={{
//               width: "500px",
//               height: "400px",
//               padding: "8px",
//               marginBottom: "12px",
//             }}
//             required
//           />
//         </div>

//         {/* 이미지 업로드
//         <div style={{ marginBottom: "12px" }}>
//           <input type="file" accept="image/*" onChange={handleFileChange} />
//           {form.img && <p>선택된 파일: {form.img}</p>}
//         </div> */}

//         <button type="submit">등록</button>
//       </form>
//     </div>
//   );
// }