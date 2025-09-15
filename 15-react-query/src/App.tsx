import axios from "axios";
import { useRef } from "react";
import type { Post } from "./types";
import useCreatePost from "./hooks/useCreatePost";
import { useQuery } from "@tanstack/react-query";

export default function App() {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyref = useRef<HTMLInputElement>(null);
  const { mutate, isPending, error } = useCreatePost(() => {
    if (titleRef.current?.value && bodyref.current?.value) {
      titleRef.current.value = "";
      bodyref.current.value = "";
    }
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
          <button disabled={isPending}>
            {isPending ? "creando... " : "enviar"}
          </button>
          {error && <span>{error.message}</span>}
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
