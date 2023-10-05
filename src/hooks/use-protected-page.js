import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importe o useNavigate
import { globalContext } from "../../src/GlobalState/GlobalStateContext";

const useProtectedPage = () => {
  const navigate = useNavigate(); // Use o useNavigate
  const context = useContext(globalContext);
  const { isLoggedIn } = context;

  useEffect(() => {
    if (!isLoggedIn) {
      // Se o usuário não estiver autenticado, redirecione para a página de login
      navigate("/"); // Use o navigate em vez de history.push
    }
  }, [navigate, isLoggedIn]);
};

export default useProtectedPage;
