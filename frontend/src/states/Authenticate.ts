import { atom } from "recoil";

export const authenticateState = atom<string>({
  key: "AuthenticateState",
  default: "",
});
