import { API_URL } from "@/config/constants";
import Axios from "axios";

export const POKEMON_API_URL = Axios.create({
  baseURL: `${API_URL}`,
});
