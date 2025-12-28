import { useParams } from "react-router-dom";

const BoardDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>게시글 상세</h2>
      <p>게시글 ID: {id}</p>
    </div>
  );
};

export default BoardDetail;
