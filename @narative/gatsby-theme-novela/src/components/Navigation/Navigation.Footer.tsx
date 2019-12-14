import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";

import Section from "@components/Section";
import SocialLinks from "@components/SocialLinks";

import mediaqueries from "@styles/media";

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
            social {
              url
              name
            }
          }
        }
      }
    }
    allMdx(sort: {fields: frontmatter___date, order: ASC}) {
      edges {
        node {
          frontmatter {
            date
          }
        }
      }
    }
  }
`;

const Footer: React.FC<{}> = () => {
  const results = useStaticQuery(siteQuery);
  const { name, social } = results.allSite.edges[0].node.siteMetadata;

  const copyrightDate = (() => {
    const { edges } = results.allMdx;
    const years = [0, edges.length - 1].map((edge) =>
      new Date(edges[edge].node.frontmatter.date).getFullYear()
    );
    return years[0] === years[1] ? `${years[0]}` : `${years[0]}–${years[1]}`;
  })();

  return (
    <>
      <FooterGradient />
      <Section narrow>
        <HoritzontalRule />
        <FooterContainer>
          <FooterText>
            © {copyrightDate} {name}
          </FooterText>
          <div>
            <SocialLinks links={social} />
          </div>
        </FooterContainer>
      </Section>
    </>
  );
};

export default Footer;

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 40px;
  color: ${p => p.theme.colors.secondary};

  ${mediaqueries.tablet`
    flex-direction: column;
    padding-bottom: 100px;
  `}

  ${mediaqueries.phablet`
    padding-bottom: 50px;
    padding-top: 80px;
  `}
`;

const HoritzontalRule = styled.div`
  position: relative;
  margin: 240px auto 32px;
  border-bottom: 1px solid ${p => p.theme.colors.horizontalRule};

  ${mediaqueries.tablet`
    margin: 160px auto 60px;
  `}

  ${mediaqueries.phablet`
    display: none;
  `}
`;

const FooterText = styled.div`
  ${mediaqueries.tablet`
    margin-bottom: 80px;
  `}

  ${mediaqueries.phablet`
    margin: 64px auto 24px;
  `}
`;

const FooterGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${p => p.theme.colors.gradient};
  transition: ${p => p.theme.colorModeTransition};
`;
