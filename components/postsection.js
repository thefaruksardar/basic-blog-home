import axios from "axios";
import React from "react";

const getPosts = async () => {
  const res = await axios("https://64b5509ff3dbab5a95c723f9.mockapi.io/D3");

  const data = await res.data;

  return data;
};

export default async function Postsection() {
  const posts = await getPosts();

  return (
    <section>
      <div>
        {posts.map((post, index) => (
          <article key={index}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
