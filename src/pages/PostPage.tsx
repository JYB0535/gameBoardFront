import { useState } from "react";

export default function PostPage() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    image: null as File | null,
  });

  // 입력값 변경 핸들러
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 이미지 파일 변경 핸들러
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setForm((prev) => ({
        ...prev,
        image: e.target.files![0],
      }));
    }
  };

  // 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("작성된 글:", form);
    // 서버 전송 로직
  };

  return (
    <div style={{ maxWidth: "1000px", maxHeight:"800px", margin: "0 auto" }}>
      <h2>글 작성</h2>
      <form onSubmit={handleSubmit}>
        {/* 제목 */}
        <div>
          <input
            type="text"
            name="title"
            placeholder="제목"
            value={form.title}
            onChange={handleChange}
            style={{ width: "500px", height: "30px", padding: "8px", marginBottom: "12px" }}
            required // 필수 입력값이라는 의미입니다!
          />
        </div>

        {/* 내용 */}
        <div>
          <textarea
            name="content"
            placeholder="내용을 입력하세요"
            value={form.content}
            onChange={handleChange}
            style={{
              width: "500px",
              height: "400px",
              padding: "8px",
              marginBottom: "12px",
            }}
            required
          />
        </div>

        {/* 이미지 업로드 */}
        <div style={{ marginBottom: "12px" }}>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {form.image && <p>선택된 파일: {form.image.name}</p>}
        </div>

        <button type="submit">등록</button>
      </form>
    </div>
  );
}