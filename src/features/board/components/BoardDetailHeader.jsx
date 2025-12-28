const BoardDetailHeader = ({ title, author, createdAt, views }) => {
  return (
    <div style={{ marginBottom: "24px" }}>
      <h1 style={{ marginBottom: "8px" }}>{title}</h1>
      <div style={{ color: "#666", fontSize: "14px" }}>
        {author} | {createdAt} | 조회수 {views}
      </div>
    </div>
  );
};

export default BoardDetailHeader;
