import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { useSidebar } from '@rocketseat/gatsby-theme-docs-core';

import {
  Container,
  BioContainer,
  List,
  Heading,
  Item,
  SubItem,
} from './styles';
import { isExternalUrl } from '../../util/url';
import ExternalLink from './ExternalLink';
import InternalLink from './InternalLink';
import BioIcon from './BioIcon'

function ListWithSubItems({ children, text }) {
  return (
    <>
      <Heading>{text}</Heading>
      <SubItem>{children}</SubItem>
    </>
  );
}

export default function Sidebar({ isMenuOpen }) {
  const {
    site: {
      siteMetadata: { basePath },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          basePath
        }
      }
    }
  `);

  const data = useSidebar();

  function renderLink(link, label) {
    return isExternalUrl(link) ? (
      <ExternalLink link={link} label={label} />
    ) : (
      <InternalLink link={link} label={label} />
    );
  }

  return (
    <Container isMenuOpen={isMenuOpen}>
      <BioContainer>
        <BioIcon/>
        <h2>Mainak Nistala</h2>
        <p>I am a high school student and Table Tennis player base in Mumbai.  I’ve been playing since I was 8 and compete at various levels. Table Tennis is a big part of my life, so I started this blog to teach students world over table tennis skills from beginners to advance. </p>
      </BioContainer>
      <nav>
        <List>
          {data.map(({ node: { label, link, items, id } }) => {
            if (Array.isArray(items)) {
              const subitems = items.map((item) => {
                return (
                  <Item key={item.link}>
                    {renderLink(item.link, item.label)}
                  </Item>
                );
              });

              return (
                <ListWithSubItems key={id} text={label}>
                  {subitems}
                </ListWithSubItems>
              );
            }

            return <Item key={id}>{renderLink(link, label)}</Item>;
          })}
        </List>
      </nav>
    </Container>
  );
}

ListWithSubItems.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
  ]).isRequired,
  text: PropTypes.string.isRequired,
};

Sidebar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};
