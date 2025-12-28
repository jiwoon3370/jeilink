const BoardDetailView = ({ post }) => {
  return (
    <div>
      {/* 제목 */}
      <h2>{post.title}</h2>

      {/* 메타 정보 */}
      <div style={{ color: "#666", marginBottom: "12px" }}>
        {post.author} · {post.createdAt} · 조회 {post.views}
      </div>

      <hr />

      {/* 본문 */}
      <div style={{ minHeight: "200px", margin: "20px 0" }}>
        {post.content}
      </div>

      <hr />

      {/* 댓글 영역 (UI만 먼저) */}
      <h3>댓글</h3>

      <ul>
        {/* 나중에 map으로 교체 */}
        <li>
          <strong>user1</strong>: 댓글 예시입니다
        </li>
      </ul>

      <div>
        <input placeholder="댓글을 입력하세요" />
        <button>등록</button>
      </div>
    </div>
  );
};

export default BoardDetailView;