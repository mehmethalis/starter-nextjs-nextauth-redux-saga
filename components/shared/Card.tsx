import styled from "styled-components";
import React from "react";

interface CardProps {
    title: string;
    className?: string;
    children?: React.ReactNode;
}

const Card = ({title, className, children}: CardProps) => (
    <div className={className}>
        <CardTitle>{title}</CardTitle>
        {children}
    </div>
);

const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 25px 25px 50px 25px;
  border-radius: 15px;
  width: 500px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;
const CardTitle = styled.h2`
  font-size: 3rem;
  padding: 0px 15px 25px 15px;
  text-align: center;
  color: palevioletred;
`

export default StyledCard