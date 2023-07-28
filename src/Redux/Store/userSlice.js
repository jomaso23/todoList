import { ReactReduxContext } from "react-redux";

import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../../Services/thunkService";

const initialState = {
  name: "name",
  username: "username",
  log: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      const { name, username, email } = action.payload;
      state.name = name;
      state.username = username;
      state.email = email;
    },
    changeLog: (state, action) => {
      state.log = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.username = "Loading...";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        const { name, username, log } = action.payload;
        state.name = name;
        state.username = username;
        state.log = log;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { addUsers, changeLog } = userSlice.actions;
export default userSlice.reducer;
