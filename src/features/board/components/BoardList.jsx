import { useNavigate } from "react-router-dom";

const BoardList = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => navigate(`/board/${post.id}`)}
            >
              {post.title}
            </td>
            <td>{post.author}</td>
            <td>{post.createdAt}</td>
            <td>{post.views}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BoardList;
