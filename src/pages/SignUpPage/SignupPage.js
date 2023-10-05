import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { globalContext } from "../../GlobalState/GlobalStateContext";
import { goToHomePage } from "../../Router/coordinator";
import { 
    FormSignup, 
    InputSignup, 
    RegisterButton, 
    TermsContract, 
    HeaderSignup, 
    PasswordView, 
    CheckboxContract,
    Container 
} from "./signupStyle";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import ToastAnimated, { showToast } from "../../Components/Toast/Toast";
import { Loading } from "../../Components/Loading/Loading";

const SignUpPage = () => {
    const navigate = useNavigate();
    const context = useContext(globalContext);
    const { isLoggedIn, setIsLoggedIn } = context;
    const [isLoading, setIsLoading] = useState(false);

    const [form, setForm] = useState({
        nickname: "",
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

    // Função de simulação de cadastro de usuário
    const simulateSignUp = () => {
        // Simule um objeto de resposta com um username
        const simulatedResponse = { username: form.username };
            
        // Armazene o username no localStorage
        localStorage.setItem('username', simulatedResponse.username);

        // Navegar para a página inicial após o cadastro
        goToHomePage(navigate);

        setIsLoading(false);
        setIsLoggedIn(true);
    };

    const signUp = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Simulação de cadastro bem-sucedido
            simulateSignUp();
        } catch (error) {
            setIsLoading(false);
            console.error(error);
            showToast({ type: 'error', message: 'Ocorreu um erro ao cadastrar.' });
        }
    };

    return (
        <Container>
            <HeaderSignup>Olá, seja bem-vindo ao BR BANK ;)</HeaderSignup>
            <FormSignup onSubmit={signUp} autoComplete="off">
                <InputSignup
                    name={"nickname"}
                    value={form.nickname}
                    onChange={onChangeForm}
                    required
                    placeholder="Apelido"
                />
                <InputSignup
                    name={"username"}
                    value={form.username}
                    onChange={onChangeForm}
                    placeholder="Nome do Usuário"
                    pattern="^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$"
                    required
                />
                <PasswordView>
                    <InputSignup
                        name={"password"}
                        value={form.password}
                        onChange={onChangeForm}
                        placeholder="Senha"
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,12}$"
                        title="Sua senha deve ter entre 8 e 12 caracteres, sendo um maiúsculo, um número e um caractere especial"
                        type={showPassword ? "text" : "password"}
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
                <TermsContract>
                    Ao continuar, você concorda com o nosso <a href="https://www.labenu.com.br/?utm_term=labenu&utm_campaign=&utm_source=googleads&utm_medium=cpc&hsa_acc=3391787529&hsa_cam=20417453410&hsa_grp=147104971850&hsa_ad=667659725933&hsa_src=g&hsa_tgt=kwd-949277095394&hsa_kw=labenu&hsa_mt=b&hsa_net=googleads&hsa_ver=3&gad=1&gclid=Cj0KCQjwuZGnBhD1ARIsACxbAVhiq3PttnH_AbjK5XMjcsoLzNBpTSfvEpDjyap7BTBZPkLwA-kBCI0aAtlREALw_wcB">
                        Contrato de usuário
                    </a> e nossa <a href="https://www.labenu.com.br/?utm_term=labenu&utm_campaign=&utm_source=googleads&utm_medium=cpc&hsa_acc=3391787529&hsa_cam=20417453410&hsa_grp=147104971850&hsa_ad=667659725933&hsa_src=g&hsa_tgt=kwd-949277095394&hsa_kw=labenu&hsa_mt=b&hsa_net=googleads&hsa_ver=3&gad=1&gclid=Cj0KCQjwuZGnBhD1ARIsACxbAVhiq3PttnH_AbjK5XMjcsoLzNBpTSfvEpDjyap7BTBZPkLwA-kBCI0aAtlREALw_wcB">
                        Política de Privacidade
                    </a>.
                </TermsContract>
                <CheckboxContract>
                    <input type="checkbox" id="example1" />
                    <label htmlFor="example1">Eu concordo em receber e-mails sobre ofertas da BR BANK</label>
                </CheckboxContract>
                <RegisterButton 
                    disabled={isLoading}
                    onClick={() => goToHomePage(navigate)}
                >
                    Cadastrar
                </RegisterButton>
                {isLoading && <Loading />}
                <ToastAnimated />
            </FormSignup>
        </Container>
    );
};

export default SignUpPage;
