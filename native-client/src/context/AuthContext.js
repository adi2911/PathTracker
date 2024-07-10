import { authReducer } from "./authReducer";
import createDataContext from "./createDataContext";

export const { Context, Provider } = createDataContext(authReducer, {}, {});
