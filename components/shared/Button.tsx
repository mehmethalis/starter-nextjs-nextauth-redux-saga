import styled from "styled-components";

const Button = styled.button`
  color: ${(props: { primary?: boolean }) => (props.primary ? "white" : "palevioletred")};
  background: ${(props: { primary?: boolean }) => (props.primary ? "palevioletred" : "white")};
  font-size: 20px;
  margin: 15px;
  padding: 5px 30px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: white;
    border-color: palevioletred;
    color: palevioletred;
    transition-duration: 0.5s;
  }
`;
export default Button