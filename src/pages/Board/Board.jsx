import { useEffect, useState } from "react";
import { getPosts } from "../../features/board/api";
import BoardList from "../../features/board/components/BoardList";

const Board = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts)
  }, []);

  return (
    <div>
      <h2>게시판</h2>
      <BoardList posts={posts} />
    </div>
  );
};

export default Board;