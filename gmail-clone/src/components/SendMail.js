import { Button } from "@mui/material";
import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="sendMail">
      <div className="sendMail-header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail-close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("to", { required: true })} //v7 react-hook-form
          placeholder="To"
          type="text"
        />
        {errors.to && (<p className="sendMail-error">To is required!</p>)} 
        

        <input
          {...register("subject", { required: true })}
          placeholder="Subject"
          type="text"
        />
        {errors.subject && (
          <p className="sendMail-error">Subject is required!</p>
        )}

        <input
          {...register("message", { required: true })}
          type="text"
          className="sendMail-message"
        />
        {errors.message && (
          <p className="sendMail-error">Message is required!</p>
        )}

        <div className="sendMail-options">
          <Button
            className="sendMail-send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
