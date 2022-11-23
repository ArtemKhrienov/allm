import React, { FC } from "react";

import { Container, Text } from "./separator.styles";

type TSeparatorProps = {
  text: string;
  textBgWidth?: number;
};

const Separator: FC<TSeparatorProps> = ({ text, textBgWidth = 9 }) => {
  return (
    <Container>
      <Text textBgWidth={textBgWidth}>{text}</Text>
    </Container>
  );
};

export default Separator;
