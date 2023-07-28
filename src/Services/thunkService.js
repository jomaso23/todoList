import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLog } from "./userService";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  try {
    const logStatus = {
      name: "nombreLogueado",
      username: "usernameLogueado",
      log: true,
    };
    return logStatus;
  } catch (error) {
    console.log("el error es :" + error);
  }
});
