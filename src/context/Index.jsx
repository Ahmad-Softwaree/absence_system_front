import { AuthContextProvider } from "./AuthContext";
import { UiContextProvider } from "./UiContext";
import { UtilContextProvider } from "./UtilContext";

export const MainContext = ({ children }) => {
  return (
    <AuthContextProvider>
      <UiContextProvider>
        <UtilContextProvider>{children}</UtilContextProvider>
      </UiContextProvider>
    </AuthContextProvider>
  );
};
