import { useParams } from "react-router-dom";

import PageWrapper from "../../components/layout/PageWrapper";
import Section from "../../components/layout/Section";
import BoardDetailHeader from "../../features/board/components/BoardDetailHeader";
import BoardContent from "../../features/board/components/BoardContent";
import { mockPost } from "../../features/board/mock/mockPost";
import { mockComments } from "../../features/comment/mock/mockComments";
import CommentList from "../../features/comment/components/CommentList";

const BoardDetail = () => {
  const { postId } = useParams();

  const post = mockPost.find(
    (p) => p.id === Number(postId)
  );

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <PageWrapper>
      <Section maxWidth="900px">
        <BoardDetailHeader
          title={post.title}
          author={post.author}
          createdAt={post.createdAt}
          views={post.views}
        />

        <BoardContent content={post.content} />

        <hr style={{ margin: "40px 0" }} />
        <div>
        
          <hr />

          <h3>댓글</h3>
          <commentList comments={mockComments} />
        </div>
      </Section>
    </PageWrapper>
  );
};

export default BoardDetail;
