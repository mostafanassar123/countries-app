import { object, string } from "yup";

const emailMsgs = {
    required: "Email Required",
    notEmail: "Please provide Valid Email"
};

const passwordMsgs = {
    required: "Password Required",
    min: "Min Length 3 chartacters",
    max: "max Length 10 chartacters"
};

const validationSchema = object().shape({
    email: string().required(emailMsgs.required).email(emailMsgs.notEmail),
    password: string().min(3, passwordMsgs.min).max(10, passwordMsgs.max).required(passwordMsgs.required),
});

export default validationSchema