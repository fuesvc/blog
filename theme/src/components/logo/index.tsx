import React, {FunctionComponent} from "react";
import styled from "styled-components";
import {graphql, Link, useStaticQuery} from "gatsby";
import Theme from "../../styles/theme";
// import Img from "gatsby-image";


interface LogoProps {
  title: string;
}

const LogoImage = styled.img`
  width: 48px;
  @media (max-width: ${Theme.breakpoints.sm}) {
  }
`;

const HomeLink = styled(Link)`
  align-self: center;
  width: 48px;
  padding-top: 4px;
`;

const Logo: FunctionComponent<LogoProps> = ({title}) => {
  let logoQuery = (
    useStaticQuery(graphql`
      query {
        file(sourceInstanceName: {eq: "themeAssets"}, name: {eq: "Logo"}) {
          extension
          publicURL
        }
      }
    `)
  )
  // fixed={logo.file.childImageSharp.fixed}
  return (
    <HomeLink to={`/`}>
      <LogoImage src={logoQuery.file.publicURL} alt={title}/>
    </HomeLink>
  );
}
;

export default Logo;
