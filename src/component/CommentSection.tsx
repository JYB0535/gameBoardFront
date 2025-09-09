import { useEffect, useState } from "react";
import type { Comment } from "../type";
import { fetchComments, addComment } from "../api/commentApi";
import { Button, TextField } from "@mui/material";

interface Props {
  id?: number; 
}

export default function CommentSection({id}: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (!id) return;
    fetchComments(id).then(setComments).catch(console.error);
  }, [id]);

const handleSubmit = async () => {
  if (!newComment.trim() || !nickname.trim() || !username.trim()) return;

  await addComment({
    postId: id!,
    nickname,
    username,
    content: newComment,
    date: new Date().toISOString(),
  });

  setNewComment("");
  fetchComments(id!).then(setComments);
};

return (
  <>
    {/* 본문 박스 */}
  

    {/* 댓글 박스 (박스 바깥) */}
    <div
      style={{
      marginTop: "2rem",
      border: "1px solid #ddd",
      padding: "20px",
      borderRadius: "8px",
      backgroundColor: "#fefefe",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    }}
    >
      <h3 style={{ marginBottom: "1rem" }}>댓글</h3>
      <TextField
        label="명예훼손, 개인정보 유출, 분쟁 유발, 허위사실 유포 등의 글은 이용약관에 의해 제재는 물론 법률에 의해 처벌 받을 수 있습니다. 건전한 커뮤니티를 위해 자제를 당부 드립니다."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        multiline
        rows={3}
        fullWidth
        style={{ marginBottom: "5px" }}
      />
      <Button variant="contained" onClick={handleSubmit}>
        댓글 작성
      </Button>

      <ul style={{ marginTop: "20px" }}>
        {comments.map((c) => (
          <li key={c.id}>
            <strong>{c.nickname}</strong>: {c.content} <em>({c.date})</em>
          </li>
        ))}
      </ul>
    </div>
  </>
);


}