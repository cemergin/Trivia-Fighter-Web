import React from "react";
import Image from "../components/image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "404.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="404: Not found" />
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <h1>Something went wrong...</h1>
      <p>You just hit a route that doesn&#39;t exist... </p>
    </Layout>
  );
};

export default NotFoundPage;
