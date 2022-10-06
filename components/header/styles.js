import styled from "styled-components";
import { Avatar } from "@material-ui/core";

export const MenuHeader = styled.header`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  border-bottom: 2px solid whitesmoke;

  .app__menu--iconBox {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledAvatar = styled(Avatar)`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
