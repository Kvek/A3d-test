import { ImgHTMLAttributes } from "react";

import { Container } from "./Image.styles";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
}

export const Image = (props: Props) => (
  <Container>
    <img {...props} />
  </Container>
);
