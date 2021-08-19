import React from 'react'
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;

  display: grid;
  grid-template-columns: 50% 50%;
  grid-auto-flow: row;
  grid-gap: 40px;

  @media (max-width: 780px) {
    padding: 24px;
    grid-template-columns: 100%;
  }
`;

export function EmbedVideo({ String: url }) {
  return (
    <iframe width="560" height="315" src={url} title={url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
  )
}