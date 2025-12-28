import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";

const BoardContent = ({ content = [] }) => {
  return (
    <div style={{ lineHeight: "1.7", fontSize: "16px" }}>
      {content.map((block, index) => {
        if (block.type === "text") {
          return (
            <p key={index} style={{ margin: "16px 0" }}>
              {block.value}
            </p>
          );
        }

        if (block.type === "image") {
          return (
            <img
              key={index}
              src={block.url}
              alt=""
              style={{
                maxWidth: "100%",
                margin: "24px 0",
                borderRadius: "8px",
              }}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default BoardContent;