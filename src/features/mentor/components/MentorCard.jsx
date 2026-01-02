import profileImage from "../../../assets/images/J.png";

const statusColor = {
  open: "#1e90ff",
  closed: "#e74c3c",
};

const MentorCard = ({ mentor, onClick }) => {
  return (
    <div
      onClick={() => onClick(mentor)}
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "16px",
        backgroundColor: "#fff",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow =
          "0 6px 20px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* 프로필 */}
      <div
        style={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          overflow: "hidden",
          marginBottom: "10px",
        }}
      >
        <img
          src={profileImage}
          alt="멘토 프로필"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* 제목 */}
      <h4 style={{ margin: "6px 0" }}>{mentor.groupName}</h4>

      {/* 상태 배지 */}
      <span
        style={{
          fontSize: "12px",
          padding: "4px 10px",
          borderRadius: "12px",
          color: "#fff",
          backgroundColor: statusColor[mentor.status],
          marginBottom: "10px",
        }}
      >
        {mentor.status === "open" ? "모집중" : "마감"}
      </span>

      <p style={{ margin: "2px 0" }}>멘토: {mentor.mentorName}</p>
      <p style={{ margin: "2px 0" }}>대상: {mentor.target}</p>
    </div>
  );
};

export default MentorCard;
