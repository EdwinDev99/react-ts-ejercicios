import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Post } from "../types";
import axios from "axios";

export default function useCreatePost(onCreate: () => void) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (post: Post) =>
      axios
        .post<Post>(
          "https://jsonplaceholder.typicode.com/posts?_limit=10",
          post
        )
        .then((response) => response.data),
    onMutate: (newPost) => {
      const previousPosts = queryClient.getQueryData<Post[]>(["posts"]);

      queryClient.setQueryData<Post[]>(["posts"], (oldPosts = []) => [
        newPost,
        ...oldPosts,
      ]);

      onCreate();
      return previousPosts;
    },
    onSuccess: (savedPost, newPost) => {
      queryClient.setQueryData<Post[]>(["posts"], (posts = []) =>
        posts.map((post) => (post.id === newPost.id ? savedPost : post))
      );
    },
    onError: (error, newPost, ctx) => {
      queryClient.setQueryData(["posts"], ctx);
    },
  });
}
