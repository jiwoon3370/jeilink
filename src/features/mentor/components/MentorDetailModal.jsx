import profileImage from "../../../assets/images/J.png";

const MentorDetailModal = ({ mentor, onClose }) => {
  if (!mentor) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "500px",
          borderRadius: "10px",
          padding: "24px",
          position: "relative",
        }}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            border: "none",
            background: "none",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        {/* 프로필 */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <img
            src={profileImage}
            alt="멘토"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>

        <h2>{mentor.groupName}</h2>
        <p>멘토: {mentor.mentorName}</p>
        <p>대상: {mentor.target}</p>
        <p>
          상태:{" "}
          <strong>
            {mentor.status === "open" ? "모집중" : "마감"}
          </strong>
        </p>

        <hr style={{ margin: "16px 0" }} />

        <p>{mentor.description}</p>
      </div>
    </div>
  );
};

export default MentorDetailModal;
