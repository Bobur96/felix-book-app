import { object, string } from "yup";
const allRegEx = /^[A-Za-z0-9'#+-:"_ ]*$/;

export const sing_up = {
  name: "",
  email: "",
  key: "",
  secret: "",
};

export const sing_in = {
  name: "",
  key: "",
  secret: "",
};

export const initialBook = {
  title: "",
  author: "",
  cover: "",
  published: "",
  pages: "",
};

export const validation_up  = object({
  name: string().matches(allRegEx, { message: " "}).required(" "),
  email: string().email().required(" "),
  key: string().matches(allRegEx, { message: " "}).required(" "),
  secret: string().required(" "),
})

export const validation_in  = object({
  name: string().matches(allRegEx, { message: " "}).required(" "),
  key: string().required(" "),
  secret: string().required(" "),
})

export const validationBook  = object({
  title: string().required(" "),
  author: string().required(" "),
  cover: string().required(" "),
  published: string().required(" "),
  pages: string().required(" "),
})
