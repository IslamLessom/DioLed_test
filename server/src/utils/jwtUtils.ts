import jwt from "jsonwebtoken";

export const verifyToken = (token: any) => {
  return jwt.verify(token, "your_jwt_secret");
};
