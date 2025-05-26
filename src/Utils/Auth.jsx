import jwt_decode from "jwt-decode";

export const decodeTokenUser = () => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      user = jwt_decode(token);

      const isExpired = user.exp * 1000 < Date.now();

      if (isExpired) {
        localStorage.removeItem("token");
        user = null;
      }

      return user;
    } catch {
      console.log("Token inválido");
      localStorage.removeItem("token");
    }
  }
};
