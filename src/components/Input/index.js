/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
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
  background-color: ${({ theme }) => theme.colors.inputBack};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.inputPlace};
}
  :-moz-placeholder { /* Firefox 18- */
   color: ${({ theme }) => theme.colors.inputPlace};
}

  ::-moz-placeholder {  /* Firefox 19+ */
    color: ${({ theme }) => theme.colors.inputPlace};
}
  :-ms-input-placeholder {  
     color: ${({ theme }) => theme.colors.inputPlace};
}
  &:focus{
    background-color: ${({ theme }) => theme.colors.inputBackFocus};
  }
`;

// eslint-disable-next-line object-curly-spacing
// eslint-disable-next-line react/prop-types
export default function Input({ onChange, placeholder, ...props }) {
  return (
    <Div>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </Div>
  );
}

Input.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.string.isRequired,
};
