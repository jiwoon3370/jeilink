import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const DevLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const devLogin = () => {
    login();          // ✅ 상태 + storage 동기화
    navigate("/board");
  };

  return (
    <div>
      <h2>개발자 전용 로그인</h2>
      <button onClick={devLogin}>
        개발용 로그인
      </button>
    </div>
  );
};

export default DevLogin;
