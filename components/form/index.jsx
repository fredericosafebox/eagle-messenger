import schema from "../../schema/newChat.shema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledForm } from "./styles";
import { StyledTextField } from "./styles";
import { StyledButton } from "../newChat/styles";
import { setModalClosed } from "../../store/reducers/modalSlice";
import { useDispatch } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";

function NewChatForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const submitData = (data) => {
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitData)}>
      <div className="app__form--top">
        <h3>Insert a valid ID to connect</h3>
        <button type="button" onClick={() => dispatch(setModalClosed())}>
          <CloseIcon />
        </button>
      </div>
      <div className="app__form--inputBox">
        <StyledTextField
          label="email"
          id="email"
          {...register("email")}
          variant="outlined"
          error={errors.email ? true : false}
          helperText={errors?.email?.message}
        />

        <StyledButton
          className="app__form--button"
          variant="contained"
          color="primary"
          type="submit"
        >
          OK
        </StyledButton>
      </div>
    </StyledForm>
  );
}

export default NewChatForm;
