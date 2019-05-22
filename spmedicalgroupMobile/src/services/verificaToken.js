import auth from "./auth";

export const isTokenValid = () => await auth.getItem().then(res => (token = res)) !== null;