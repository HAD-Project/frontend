import { useNavigate } from "react-router-dom";

export const useSubmitCreds = () => {
  const navigate = useNavigate();

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
      const role = "receptionist";
      navigate(`/${role}/dashboard`);
    }
    // show errors
  };
  return { handleSubmit };
};
