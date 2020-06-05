import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    padding: 10px 25px;
    background-color: ${({ theme }) => theme.blue};
    border: none;
    outline: none;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    transition: .3s linear;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.fontSize.s};
    
    &:hover{
      background-color: #fff;
      border: 1px solid ${({ theme }) => theme.blue};
      color: ${({ theme }) => theme.blue};
    }
`;

export default Button;