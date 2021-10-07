import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";

const index = ({ data }) => {
  const router = useRouter();
  return (
    <Layout pageTitle="Users">
      <Image
        src="/profile.jpg"
        alt="profile user"
        width="200px"
        height="200px"
      />
      <h2>Hello from users</h2>
      {data.map((item, i) => (
        <h2 onClick={() => router.push(`/users/${item.id}`)} key={i}>
          {item.name}
        </h2>
      ))}
    </Layout>
  );
};

export default index;

// Fetch data apabila data yang disediakan merupakan data static atau tidak berubah
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
