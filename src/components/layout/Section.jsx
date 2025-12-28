const Section = ({ children, maxWidth = "900px" }) => {
  return (
    <section
      style={{
        maxWidth,
        margin: "0 auto",
        background: "#fff",
        padding: "32px",
        borderRadius: "8px",
      }}
    >
      {children}
    </section>
  );
};

export default Section;
