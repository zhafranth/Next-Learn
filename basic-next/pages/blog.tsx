import Layout from "../components/Layout";
import style from "../styles/Blog.module.css";

const Blog = ({ dataBlog }) => {
  return (
    <Layout pageTitle="Blog">
      <h2>Hello from Blog</h2>
      {dataBlog.map((item, i) => (
        <div className={style.card} key={i}>
          <h4 className="title">{item.title}</h4>
          <p className="content">{item.body}</p>
        </div>
      ))}
    </Layout>
  );
};

export default Blog;

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog,
    },
  };
};
