import axios from "axios";

// export const signin = (user) => {
//   return axios
//     .post("http://localhost:8000/api/signin", user)
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    // window object is accessible to us
    localStorage.setItem("jwt", JSON.stringify(data.token));
    localStorage.setItem("profileData", JSON.stringify(data));
  }
};

export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    localStorage.removeItem("profileData");
    


    axios
      .get(`http://localhost:8000/api/user/logout`)
      .then((response) => console.log("signout success"))
      .catch((err) => console.log(err));
  }
};

export const isAutheticated = () => {
  if (typeof window == "undefined") {
    //
    return false;
  }

  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
