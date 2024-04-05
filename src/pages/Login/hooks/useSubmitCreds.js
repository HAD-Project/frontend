import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveLogin } from "../../../slices/userSlice";

export const useSubmitCreds = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = (data, setErrs) => {
    let valid = true;
    Object.entries(data).forEach(([name, value]) => {
      if (!value || (value && value.length === 0)) {
        setErrs((prev) => {
          return { ...prev, [name]: `Please enter ${name}` };
        });
        valid = false;
      } else {
        setErrs((prev) => {
          return { ...prev, [name]: "" };
        });
      }
    });
    return valid;
  };
  const handleSubmit = (data, setErrs) => {
    const valid = validate(data, setErrs);
    if (valid) {
      // backend request

      dispatch(
        saveLogin({
          logged: true,
          type: data.username,
          name: "ABC " + data.username,
        })
      );
      localStorage.setItem("accesstoken", "hgjhdhg");
      const role = data.username.toLowerCase();
      navigate(`/${role}/dashboard`);
    }
    // show errors
  };
  return { handleSubmit };
};
