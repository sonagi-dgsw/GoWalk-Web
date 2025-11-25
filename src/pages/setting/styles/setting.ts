import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #f3f3f3;
`;

export const StatusBar = styled.div`
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 24px;
  font-size: 20px;
  font-weight: 600;
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 16px 16px 0 0;
  padding-top: 20px;
  margin-top: 12px;
  min-height: 700px;
  padding-bottom: 50px;
`;

export const SearchBox = styled.div`
  width: calc(100% - 48px);
  height: 40px;
  margin: 28px auto 20px auto;
  border: 1px solid #b7b7b7;
  border-color:${(props)=>props.color ||"#D9D9D9"};
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 12px;
  gap: 170px;
`;

export const Toggle=styled.div`
  background-color:#D9D9D9;
  width:40px;
  height:20px;
  border-radius:50px;
`

export const ToggleCircle=styled.div`
width:20px;
height:20px;
background-color:#ffffff;
border-radius:50%;
border:1px solid #B8B8B8;
border-color:${(props)=>props.color ||"B8B8B8"};
position:relative;
right:40px;
left:${(props)=>props.color ? "-20px":"-40px"};
`

export const Logo=styled.img`
width:120px;
height:auto;
`

export const LogoContainer=styled.div`
height: 80px;
width: 100%;
background: #fff;
display: flex;
align-items: center;
padding: 0 24px;
`

export const Bell=styled.img`
width:20px;
height:20px;
`