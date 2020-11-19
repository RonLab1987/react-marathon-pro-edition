import axios from "axios";
import { HttpApiAdapterI } from "./types";

export const httpAdapter: HttpApiAdapterI = axios.create({
  withCredentials: false,
});
