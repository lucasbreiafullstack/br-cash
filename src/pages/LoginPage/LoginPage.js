import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { goToHomePage, goToSignupPage } from "../../Router/coordinator";
import { 
    FormLogin, 
    LineBetweenButtons, 
    SpaceButtons, 
    LogoContainer,  
    HeaderLogin, 
    SloganLogin, 
    InputLogin, 
    ContinueButton, 
    CreateAccountButton, 
    PasswordView,
    Container
} from "./loginstyle";
import { globalContext } from "../../GlobalState/GlobalStateContext";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import ToastAnimated, { showToast } from "../../Components/Toast/Toast";
import { Loading } from "../../Components/Loading/Loading";

const LoginPage = () => {
    const navigate = useNavigate();
    const context = useContext(globalContext);
    const { isLoggedIn, setIsLoggedIn } = context;
    const [isLoading, setIsLoading] = useState(false);

    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const onChangeForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = (type) => {
        setShowPassword(type);
    };

    const authenticate = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const body = {
                username: form.username,
                password: form.password
            };

            // Simulação de autenticação bem-sucedida
            const simulatedResponse = { data: { token: 'admin-on' } };
            localStorage.setItem("token", simulatedResponse.data.token);
            
            setIsLoading(false);
            setIsLoggedIn(true);
            goToHomePage(navigate);

        } catch (error) {
            setIsLoading(false);
            console.error(error.response);

            if (typeof error.response.data === "string") {
                showToast({ type: "error", message: `${error.response.data}` });
            } else {
                showToast({ type: "error", message: "Verifique suas informações." });
            }
        }
    };

    return (
        <Container>
            <LogoContainer>
                <HeaderLogin>BR BANK</HeaderLogin>
                <SloganLogin>O app financeiro da Nova Geração!</SloganLogin>
            </LogoContainer>

            <FormLogin onSubmit={authenticate} autoComplete="off">
                <InputLogin
                    name={"username"}
                    value={form.username}
                    onChange={onChangeForm}
                    placeholder="Nome do usuário"
                    required
                    autoComplete="email"
                />
                <PasswordView>
                    <InputLogin
                        name={"password"}
                        value={form.password}
                        onChange={onChangeForm}
                        type={showPassword ? "text" : "password"}
                        placeholder="Senha"
                        required
                        autoComplete="current-password"
                    />
                    {showPassword === false ? (
                        <AiOutlineEye
                            className="eye"
                            onClick={() => handleShowPassword(true)}
                        />
                    ) : (
                        <AiOutlineEyeInvisible
                            className="eye"
                            onClick={() => handleShowPassword(false)}
                        />
                    )}
                </PasswordView>

                <ToastAnimated />

                <ContinueButton disabled={isLoading}>Continuar</ContinueButton>
            </FormLogin>

            <LineBetweenButtons />

            <SpaceButtons>
                <CreateAccountButton
                    disabled={isLoading}
                    onClick={() => goToSignupPage(navigate)}
                >
                    Crie uma conta!
                </CreateAccountButton>

                {isLoading && <Loading />}
            </SpaceButtons>
        </Container>
    );
};

export default LoginPage;
