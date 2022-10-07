import { StyledButton } from "./styles";
import { useDispatch } from "react-redux";
import { setModalOpen } from "../../store/reducers/modalSlice";

function NewChat() {
  const dispatch = useDispatch();
  return (
    <StyledButton onClick={() => dispatch(setModalOpen())}>
      START A NEW CHAT
    </StyledButton>
  );
}

export default NewChat;
