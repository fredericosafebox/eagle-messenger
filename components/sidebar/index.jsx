import { Container } from "./styles";
import { MenuHeader, StyledAvatar } from "../header/styles";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVert from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import SearchBar from "../search";
import NewChat from "../newChat";

function Sidebar() {
  return (
    <Container>
      <MenuHeader>
        <StyledAvatar />
        <div className="app__menu--iconBox">
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </MenuHeader>
      <SearchBar />
      <NewChat />
    </Container>
  );
}

export default Sidebar;
