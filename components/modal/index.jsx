import { Wrapper } from "./styles";
import { useDispatch } from "react-redux";
import { setModalClosed } from "../../store/reducers/modalSlice";

function Modal({ children }) {
  const dispatch = useDispatch();
  const closeModal = (e) => {
    if (e.currentTarget === e.target) {
      dispatch(setModalClosed());
    }
  };
  return <Wrapper onClick={(e) => closeModal(e)}>{children}</Wrapper>;
}

export default Modal;
