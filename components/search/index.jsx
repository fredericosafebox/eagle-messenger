import { SearchWrapper } from "./styles";
import { Search } from "@material-ui/icons";
import { SearchInput } from "./styles";

function SearchBar() {
  return (
    <SearchWrapper>
      <Search />
      <SearchInput placeholder="Search in chats" />
    </SearchWrapper>
  );
}

export default SearchBar;
