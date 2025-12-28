import PageWrapper from "../../components/layout/PageWrapper";
import Section from "../../components/layout/Section";
import BoardList from "../../features/board/components/BoardList";
import { useBoardList } from "../../features/board/hooks";

const Board = () => {
  const { posts, isLoading } = useBoardList();

  if (isLoading) return <div>로딩중...</div>;

  return (
    <PageWrapper>
      <Section maxWidth="1000px">
        <h2>게시판</h2>
        <BoardList posts={posts} />
      </Section>
    </PageWrapper>
  );
};

export default Board;
