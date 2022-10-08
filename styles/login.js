import styled from "styled-components";

export const Container = styled.div`
  background: rgb(var(--primary));
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  .app__login--buttonBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    width: 15rem;
    height: 3rem;
    background: #fff;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 0.5rem;
    font-size: 1rem;
    cursor: pointer;

    img {
      height: 2.5rem;
      width: 2.5rem;
    }

    span {
      flex: 1;
    }
  }
`;
