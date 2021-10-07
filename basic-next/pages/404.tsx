import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Custome404 = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <div className="error-page">
      <h2 style={{ fontSize: "34px", fontWeight: "bold" }}>
        Oops your page not found
      </h2>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default Custome404;
