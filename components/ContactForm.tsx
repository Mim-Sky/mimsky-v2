import React from "react";
import { useForm, ValidationError } from "@formspree/react";

type Props = {};

function ContactForm() {
  const [state, handleSubmit] = useForm("mnqkvdyd");
  if (state.succeeded) {
    return (
      <p className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
        Thank you!
      </p>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-3 w-fit mx-auto"
    >
      <label htmlFor="email" className="hidden">
        Email
      </label>
      <input
        className="contactInput"
        placeholder="Email"
        id="email"
        type="email"
        name="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message" className="hidden">
        Message
      </label>
      <textarea
        className="contactInput"
        placeholder="Message"
        id="message"
        name="message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg hover:text-whiteText"
      >
        Submit
      </button>
    </form>
  );
}
export default ContactForm;
