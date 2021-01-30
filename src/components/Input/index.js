/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width:100%;
`;
const InputBase = styled.input`
  width: 89%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
`;

export default function Input() {
  return (
    <Div>
      <InputBase />
    </Div>
  );
}
