const CreateGroupModal = ({ onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "400px",
          backgroundColor: "#fff",
          padding: "24px",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ marginBottom: "16px" }}>멘토 그룹 만들기</h3>

        <input placeholder="멘토 이름" style={{ width: "100%", marginBottom: "12px" }} />
        <input placeholder="그룹 이름" style={{ width: "100%", marginBottom: "12px" }} />
        <input placeholder="대상 (예: 1학년)" style={{ width: "100%", marginBottom: "20px" }} />

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
          <button onClick={onClose}>취소</button>
          <button>만들기</button>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupModal;
