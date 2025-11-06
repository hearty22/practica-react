import { useState } from "react";
import { useNavigate } from "react-router";
export const useForm = (initialValue) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialValue);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]:  value ,
    }));
  };

  const handleReset = () => {
    console.log(formData)
    setFormData(initialValue);
  };
    const Loggout = () =>{
    localStorage.clear("isLogged")
    navigate("/login");
  }
  return {
    Loggout,
    formData,
    ...formData,
    handleChange,
    handleReset,
  };
};
