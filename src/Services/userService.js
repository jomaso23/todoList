import axios from "axios";

export const getLog = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const logStatus = {
        name: "nombreLogueado",
        username: "usernameLogueado",
        log: true,
      };

      resolve(logStatus);

      reject(new Error("failed to add user"));
    }, 1000);
  });
};
