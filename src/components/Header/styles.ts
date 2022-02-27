import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  margin-bottom: 60px;

  .kube-logo {
    font-family: "Arial Black", Gadget, sans-serif;
    font-size: 22px;
    letter-spacing: 0px;
    word-spacing: -3px;
    color: #3384ff;
    font-weight: normal;
    text-decoration: none solid rgb(68, 68, 68);
    font-style: normal;
    font-variant: normal;
    text-transform: none;
    -webkit-text-stroke: 0.8px white;
    border-radius: 0.25em;
  }

  .api-logo {
    font-family: "Arial Black", Gadget, sans-serif;
    font-size: 22px;
    letter-spacing: 0px;
    word-spacing: -3px;
    color: #fc036f;
    font-weight: normal;
    text-decoration: none solid rgb(68, 68, 68);
    font-style: normal;
    font-variant: normal;
    text-transform: none;
    -webkit-text-stroke: 0.8px white;
    border-radius: 0.25em;
  }
`;
