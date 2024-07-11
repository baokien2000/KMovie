import React from "react";
import { Input as HeadLessInput } from "@headlessui/react";
import "./input.css";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input = (props: InputProps) => {
    return <HeadLessInput {...props} />;
};

export default Input;
