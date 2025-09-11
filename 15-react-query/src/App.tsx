import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export default function App() {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyref = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (post: Post) =>
      axios
        .post<Post>(
          "https://jsonplaceholder.typicode.com/posts?_limit=10",
          post
        )
        .then((response) => response.data),
    onSuccess: (savePost, newPost) => {
      queryClient.setQueriesData<Post[]>(["posts"], (oldPosts = []) => [
        savePost,
        ...oldPosts,
      ]);
    },
  });

  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then((response) => response.data),
  });

  return (
    <>
      <h2>Pots</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (titleRef.current?.value && bodyref.current?.value) {
            mutate({
              id: 0,
              body: bodyref.current.value,
              title: titleRef.current.value,
              userId: 1,
            });
          }
        }}
      >
        <div>
          <input ref={titleRef} type="text" placeholder="title" />
        </div>
        <div>
          <input ref={bodyref} type="text" placeholder="body" />
        </div>
        <div>
          <button>enviar</button>
        </div>
      </form>
      {isLoading && <p>Cargando...</p>}
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
