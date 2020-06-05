import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    padding: 10px 25px;
    background-color: ${({ theme }) => theme.blue};
    border: 1px solid transparent;
    outline: none;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    transition: .3s linear;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.fontSize.s};
    margin-top: 15px;
    
    &:hover{
      background-color: #fff;
      border-color: ${({ theme }) => theme.blue};
      color: ${({ theme }) => theme.blue};
    }
`;

export default Button;