import { useEffect, useState } from "react";
import { getPosts } from "./api";
import { getPostDetail } from "./api";

export const useBoardList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
      setIsLoading(false);
    });
  }, []);

  return { posts, isLoading };
};

export const useBoardDetail = (id) => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    getPostDetail(id).then((data) => {
      setPost(data);
      setIsLoading(false);
    });
  }, [id]);

  return { post, isLoading };
};