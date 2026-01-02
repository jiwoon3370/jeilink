import commentItem from "./CommentItem";

const commentList = ({ comments, parentId = null, depth = 0}) => {
    console.log("🔥 CommentList render", comments, parentId);

    const filtered = comments.filter(
        (comment) =>  comment.parentId == parentId
    );

    return (
        <>
            {filtered.map((comment) => (
                <commentItem
                    key={comment.id}
                    comment={comment}
                    comments={comments}
                    depth={depth}
                />
            ))}
        </>
    );
};

export default commentList;