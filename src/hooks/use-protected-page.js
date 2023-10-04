import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { globalContext } from "../../src/GlobalState/GlobalStateContext";

const useProtectedPage = () => {
  const history = useHistory();
  const context = useContext(globalContext);
  const { isLoggedIn } = context;

  useEffect(() => {
    if (!isLoggedIn) {
      // Se o usuário não estiver autenticado, redirecione para a página de login
      history.push("/login");
    }
  }, [history, isLoggedIn]);
};

export default useProtectedPage;
