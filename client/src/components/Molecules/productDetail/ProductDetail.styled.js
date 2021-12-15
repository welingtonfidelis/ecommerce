import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  max-height: 600px;
`;

export const Image = styled.img`
  width: 360px;
  height: 360px;
  margin: 8px 0;
`

export const Text = styled.p`
  margin: 0;
`;

export const DescriptionContainer = styled.div`
  max-height: 180px;
  overflow: auto;
  margin-top: 8px
`

export const ButtonContainer = styled.div`
  margin-top: 16px;
`