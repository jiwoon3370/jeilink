import { useAuth } from "../../context/AuthContest";

export default function Login() {
  const { login } = useAuth();

  return(
   <div>
    <h1>Login Page</h1>
    <button onClick={login}>로그인</button>
   </div>
  );
}