export const getPosts = async () => {
  return Promise.resolve([
    {
      id: 1,
      title: "JEILINK 첫 게시글",
      author: "관리자",
      createdAt: "2025-12-25",
      views: 12,
    },
    {
      id: 2,
      title: "멘토-멘티 모집합니다",
      author: "학생회",
      createdAt: "2025-12-24",
      views: 45,
    },
  ]);
};