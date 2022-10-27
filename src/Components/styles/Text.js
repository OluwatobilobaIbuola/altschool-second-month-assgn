import styled from "styled-components";

export const Text = styled.span`
  white-space: ${({ ws }) => ws || null};
  line-height: 24px;
  letter-spacing: 1px;
  border-radius: ${({ br }) => br || null};
  color: ${({ theme }) => theme.modeReverse};
  padding: ${(props) => (props.padding ? props.padding : "")};
`;
