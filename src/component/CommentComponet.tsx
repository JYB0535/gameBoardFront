type CommentProps = {
  comment: {
    author: string;
    content: string;
    date: string;
  };
};

function Comment({ comment }: CommentProps) {
  return (
    <div
      style={{
        padding: "10px 0",
        borderBottom: "1px solid #eee",
        fontFamily: "'Noto Sans KR', sans-serif",
      }}
    >
      {/* 헤더 (닉네임 + 날짜) */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
        <span style={{ fontWeight: "bold", color: "#333" }}>{comment.author}</span>
        <span style={{ fontSize: "12px", color: "#888" }}>{comment.date}</span>
      </div>

      {/* 본문 */}
      <div style={{ fontSize: "14px", color: "#444", lineHeight: "1.5" }}>
        {comment.content}
      </div>
    </div>
  );
}