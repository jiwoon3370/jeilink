import CommentList from "./CommentList"

const CommentItem = ({ comment, comments, depth }) => {
  return (
    <div
      style={{
        marginLeft: depth * 20,
        padding: "10px",
        background: "#f5f5f5",
        marginBottom: "8px",
        borderRadius: "4px",
      }}
    >
      <div style={{ fontSize: "14px", fontWeight: "bold" }}>
        {comment.author}
      </div>

      <div style={{ fontSize: "13px", margin: "6px 0" }}>
        {comment.content}
      </div>

      <div style={{ fontSize: "12px", color: "#777" }}>
        ❤️ {comment.likes} · {comment.createdAt}
      </div>
      <commentList
        comments={comments}
        parentId={comment.id}
        depth={depth + 1}
      />
    </div>
  );
};

export default CommentItem;