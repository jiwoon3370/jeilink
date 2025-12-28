import { useParams } from "react-router-dom";
import { useBoardDetail } from "../../features/board/hooks";

const BoardDetail = () => {
  const { id } = useParams();
  const { post, isLoading } = useBoardDetail(id);

  if (isLoading) return <div>로딩중...</div>;
  if (!post) return <div>게시글 없음</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default BoardDetail;
