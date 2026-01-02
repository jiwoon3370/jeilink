import { useState } from "react";
import PageWrapper from "../../components/layout/PageWrapper";
import Section from "../../components/layout/Section";
import MentorCard from "../../features/mentor/components/MentorCard";
import MentorDetailModal from "../../features/mentor/components/MentorDetailModal";
import { mockMentors } from "../../features/mentor/mock/mockMentors";

const Mentor = () => {
  const [keyword, setKeyword] = useState("");
  const [statusFilter, setStatusFilter] = useState("all"); // all | open | closed
  const [selectedMentor, setSelectedMentor] = useState(null);

  const filteredMentors = mockMentors.filter((mentor) => {
    const matchKeyword =
      mentor.groupName.includes(keyword) ||
      mentor.mentorName.includes(keyword) ||
      mentor.target.includes(keyword);

    const matchStatus =
      statusFilter === "all" || mentor.status === statusFilter;

    return matchKeyword && matchStatus;
  });

  return (
    <PageWrapper>
      <Section maxWidth="1100px">
        {/* 🔹 상단 헤더 */}
        <h2>멘토 · 멘티</h2>
        <p style={{ color: "#666", marginBottom: "20px" }}>
          관심 있는 멘토 그룹을 찾아보세요
        </p>

        {/* 🔹 검색 */}
        <input
          type="text"
          placeholder="멘토 / 그룹 / 대상 검색"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "16px",
            fontSize: "14px",
          }}
        />

        {/* 🔹 상태 필터 */}
        <div style={{ marginBottom: "24px" }}>
          <button
            onClick={() => setStatusFilter("all")}
            style={{
              marginRight: "8px",
              padding: "6px 12px",
              background: statusFilter === "all" ? "#333" : "#eee",
              color: statusFilter === "all" ? "#fff" : "#000",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            전체
          </button>
          <button
            onClick={() => setStatusFilter("open")}
            style={{
              marginRight: "8px",
              padding: "6px 12px",
              background: statusFilter === "open" ? "#1e90ff" : "#eee",
              color: statusFilter === "open" ? "#fff" : "#000",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            모집중
          </button>
          <button
            onClick={() => setStatusFilter("closed")}
            style={{
              padding: "6px 12px",
              background: statusFilter === "closed" ? "#e74c3c" : "#eee",
              color: statusFilter === "closed" ? "#fff" : "#000",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            마감
          </button>
        </div>

        {/* 🔹 카드 리스트 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredMentors.map((mentor) => (
            <MentorCard
              key={mentor.id}
              mentor={mentor}
              onClick={(mentor) => setSelectedMentor(mentor)}
            />
          ))}
        </div>

        {/* 🔹 상세 팝업 */}
        <MentorDetailModal
          mentor={selectedMentor}
          onClose={() => setSelectedMentor(null)}
        />
      </Section>
    </PageWrapper>
  );
};

export default Mentor;
