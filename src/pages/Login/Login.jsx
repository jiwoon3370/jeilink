import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [ form, setForm ] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [ name ]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (form.username && form.password) {
        login(); // AuthContext login
        navigate("/board")
      }
    } catch (error) {
      console.error("로그인 실패", error);
    }
  };

  return(
   <div style={{ padding: "40px" }}>
      <h1>로그인</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="username"
            placeholder="아이디"
            value={form.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">로그인</button>
      </form>
    </div>
  );
}