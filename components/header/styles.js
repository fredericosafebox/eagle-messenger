import styled from "styled-components";
import { Avatar } from "@material-ui/core";

export const MenuHeader = styled.header`
  display: flex;
  .app__menu--iconBox {
    padding: 0 1rem;
    display: flex;
    height: fit-content;
    justify-content: space-around;

    gap: 1rem;
  }
`;

export const StyledAvatar = styled(Avatar)``;
