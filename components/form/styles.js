import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";

export const StyledForm = styled.form`
  background: rgb(var(--grey-1));
  width: 20rem;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
  border-radius: 0.3rem;
  overflow: hidden;

  .app__form--top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    color: rgb(var(--primary));
    font-weight: 400;
    button {
      background: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .app__form--inputBox {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .app__form--button {
    height: 3rem;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
`;

export const StyledButton = styled(Button)``;
