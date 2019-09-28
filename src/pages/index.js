import React from "react";
import Layout from "../components/Layout";
import Landing from "../sections/Landing";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Header from "../components/Header";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Landing />
      <About />
      <Projects />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
