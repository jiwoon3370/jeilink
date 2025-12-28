import PageWrapper from "../../components/layout/PageWrapper";
import Section from "../../components/layout/Section";
import BoardDetailHeader from "../../features/board/components/BoardDetailHeader";
import BoardContent from "../../features/board/components/BoardContent";
import { mockPost } from "../../features/board/mock/mockPost";

const BoardDetail = () => {
  const post = mockPost[0];

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
        <div>댓글 영역 (나중에)</div>
      </Section>
    </PageWrapper>
  );
};

export default BoardDetail;
