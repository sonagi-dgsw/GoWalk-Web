import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
    cursor: pointer;
    &:last-child {
        span {
            color: red;
        }
    }
`;

export const Icon = styled.div<{ url: string }>`
  width: 20px;
  height: 20px;
  background: url(${(p) => p.url}) no-repeat center/cover;
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;