import styled from "styled-components";
import { Input } from "@material-ui/core";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.3rem;
`;

export const SearchInput = styled(Input)`
  flex: 1;
`;
