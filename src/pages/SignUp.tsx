
import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8080', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (result.success) {
        alert('회원가입 성공!');
      } else {
        alert('회원가입 실패: ' + result.message);
      }
    } catch (err) {
      console.error(err);
      alert('서버 오류');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="이메일" onChange={handleChange} />
      <input name="username" type="text" placeholder="사용자 이름" onChange={handleChange} />
      <input name="password" type="password" placeholder="비밀번호" onChange={handleChange} />
      <button type="submit">회원가입</button>
    </form>
  );
};

export default SignUp;
