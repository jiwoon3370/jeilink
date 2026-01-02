const MentorHeader = ({ onCreate }) => {
  return (
    <div style={{ marginBottom: "32px" }}>
      <h2 style={{ marginBottom: "8px" }}>멘토 · 멘티</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ color: "#666" }}>
          학교 선후배 간 멘토링 그룹을 만들어보세요.
        </p>

        <button onClick={onCreate}>그룹 만들기</button>
      </div>
    </div>
  );
};

export default MentorHeader;
