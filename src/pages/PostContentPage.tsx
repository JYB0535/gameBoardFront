// import { Box, Button, Card, CardContent, Container, TextField, Typography } from "@mui/material";
// import { useState } from "react";

// export default function PostDetail() {
//   // 임시 데이터 (실제에선 서버에서 받아옴)
//   const [post, setPost] = useState({
//     nickname: "게임유저123",
//     title: "메이플스토리 보스 공략 공유합니다!",
//     date: "2025-09-04",
//     content: "여기는 본문 내용이 들어갑니다. 보스 패턴 설명과 스크린샷을 첨부했어요.",
//     image: "메이플.jpg",
//   })};

//   //댓글 추가? 
// //   const handleAddComment = () => {
// //     if (commentInput.trim() !== "") {
// //       setComments([...comments, commentInput]);
// //       setCommentInput("");
// //     }
// //   };


// return (
//     <Container maxWidth="md" sx={{ mt: 4 }}>
//       {/* 상단 */}
//       <Box sx={{ borderBottom: "1px solid #ccc", pb: 2, mb: 3 }}>
//         <Typography variant="h5" fontWeight="bold">
//           {post.title}
//         </Typography>
//         <Typography variant="subtitle1" color="text.secondary">
//           {post.nickname} | {post.date}
//         </Typography>
//       </Box>

//       {/* 본문 */}
//       <Box sx={{ mb: 4 }}>
//         <Typography variant="body1" sx={{ mb: 2 }}>
//           {post.content}
//         </Typography>
//         {post.image && (
//           <img
//             src={post.image}
//             alt="게시글 이미지"
//             style={{ maxWidth: "100%", borderRadius: "8px" }}
//           />
//         )}
//       </Box>

//       {/* 댓글 */}
//       <Box sx={{ mb: 4 }}>
//         <Typography variant="h6" sx={{ mb: 2 }}>
//           댓글
//         </Typography>
//         {comments.length === 0 ? (
//           <Typography color="text.secondary">아직 댓글이 없습니다.</Typography>
//         ) : (
//           comments.map((c, i) => (
//             <Card key={i} sx={{ mb: 1 }}>
//               <CardContent>{c}</CardContent>
//             </Card>
//           ))
//         )}

//         <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
//           <TextField
//             fullWidth
//             size="small"
//             placeholder="댓글을 입력하세요"
//             value={commentInput}
//             onChange={(e) => setCommentInput(e.target.value)}
//           />
//           <Button variant="contained" onClick={handleAddComment}>
//             등록
//           </Button>
//         </Box>
//       </Box>

//       {/* 수정 / 삭제 버튼 */}
//       <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
//         <Button variant="outlined" color="primary">
//           수정
//         </Button>
//         <Button variant="outlined" color="error">
//           삭제
//         </Button>
//       </Box>
//     </Container>
//   );
