import { getRandomCode } from "./helper";

export const MFAsMockData = [
  {
    id: 1,
    logo: "https://images.unsplash.com/photo-1506399441630-774ef431470f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1487&q=80",
    name: "Token 1",
    token: getRandomCode(),
    durationTimeLeft: 25
  },
  {
    id: 2,
    logo: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    name: "Token 2",
    token:  getRandomCode(),
    durationTimeLeft: 60
  }
]