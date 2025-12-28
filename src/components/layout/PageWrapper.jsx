const PageWrapper = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "40px 16px",
      }}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
