import { API_URL } from "@/config/constants";
import Axios from "axios";
import { useEffect } from "react";

export const POKEMON_API_URL = Axios.create({
  baseURL: `${API_URL}`,
});
