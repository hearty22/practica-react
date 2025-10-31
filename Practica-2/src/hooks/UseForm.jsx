import { useState } from "react";

export const useForm = (initialValue) => {
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
  return {
    formData,
    ...formData,
    handleChange,
    handleReset,
  };
};
