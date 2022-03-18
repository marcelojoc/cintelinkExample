import axios from "axios";
import { conf } from "../config/";

async function getLogin(data) {
  try {
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    const value = {
      accion: "LoginWSUser",
      user: data.username,
      pass: data.password,
      format: "json",
    };
    return await axios.post(conf.url, value, headers);
  } catch (error) {
    console.log(error);
  }
}

export { getLogin };
