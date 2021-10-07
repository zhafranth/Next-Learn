import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Detail = ({ user }) => {
  // Cara pemanggilan params/query pada router
  // const { name } = useRouter().query;

  // atau bisa menggunakan cara seperti dibawah ini
  // const router = useRouter();
  // const { name } = router.query;
  return (
    <Layout pageTitle="User Detail">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.addres}</p>
      <p>{user.phone}</p>
    </Layout>
  );
};

export default Detail;

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((item) => ({
    params: {
      name: `${item.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { name } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${name}`);
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
};
