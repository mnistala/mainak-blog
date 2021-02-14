import React from 'react';
import BioImage from './bioimage.jpg'
import { CircleImage } from './styles'

export default function BioIcon(props) {
  return (
    <CircleImage src={BioImage} alt="Bio Image" />
  );
}
