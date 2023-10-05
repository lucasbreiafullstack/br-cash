import { useState, useEffect } from "react";
import {
    FormLine,
    BalanceContainer,
    ContainerTransaction,
    TransactionSection,
    TransactionFilter,
    TransactionTable,
    LogoutButton,
    Username
} from "./homestyle";
import useProtectedPage from "../../hooks/use-protected-page";
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
import { getRegisteredNickname } from '../../util/userUtil';
import { MdKeyboardArrowRight, MdOutlinePix } from 'react-icons/md'

const HomePage = () => {
    const navigate = useNavigate(); // Use o useNavigate
    useProtectedPage();

    const [balance, setBalance] = useState(10000); // Saldo inicial simulado
    const [transactionData, setTransactionData] = useState([]); // Estado para as transações
    const [filteredTransactions, setFilteredTransactions] = useState([]); // Estado para transações filtradas
    const [startDate, setStartDate] = useState(""); // Estado para a data de início do filtro
    const [endDate, setEndDate] = useState(""); // Estado para a data final do filtro
    const [transactionType, setTransactionType] = useState("all"); // Estado para o tipo de transação

    const nickname = getRegisteredNickname();
    console.log(nickname)

    useEffect(() => {
        loadTransactions(); // Carrega as transações do usuário
    }, []);

    const loadTransactions = () => {
        // Simulação de transações (substitua por chamadas reais ao backend)
        const simulatedTransactions = [
            { id: 1, date: "2023-01-15", type: "cash-in", amount: 500 },
            { id: 2, date: "2023-02-10", type: "cash-out", amount: 200 },
            { id: 3, date: "2023-03-05", type: "cash-in", amount: 300 },
            { id: 4, date: "2023-04-20", type: "cash-out", amount: 100 },
        ];

        setTransactionData(simulatedTransactions);
        setFilteredTransactions(simulatedTransactions);
    };

    const handleLogout = () => {
        // Implemente sua função de logout (substitua por lógica real)
        // Navegue para a página de login após o logout
        navigate("/");
    };

    const handleFilter = () => {
        // Filtrar transações com base nas datas e no tipo selecionado
        let filtered = transactionData.filter((transaction) => {
            const transactionDate = new Date(transaction.date);
            const start = startDate ? new Date(startDate) : null;
            const end = endDate ? new Date(endDate) : null;

            // Filtro por data
            if ((start && transactionDate < start) || (end && transactionDate > end)) {
                return false;
            }

            // Filtro por tipo de transação
            if (transactionType !== "all" && transaction.type !== transactionType) {
                return false;
            }

            return true;
        });

        setFilteredTransactions(filtered);
    };

    return (
        <>
            <FormLine />

                <Username>
                    <p>Olá, {nickname}</p>
                </Username>

                <BalanceContainer>
                    <a href=""><p>Conta <br/>R$ {balance}</p> {/* Exibe o saldo simulado */}</a>
                    <a href=""><MdKeyboardArrowRight/></a>
                </BalanceContainer>

                <ContainerTransaction>
                    <TransactionSection>
                        <a href=""><MdOutlinePix/></a>
                        <p>Área pix</p>
                    </TransactionSection>

                    <TransactionSection>
                        <a href=""><MdOutlinePix/></a>
                        <p>Área pix</p>
                    </TransactionSection>
                </ContainerTransaction>
                <TransactionFilter>
                    <label htmlFor="startDate">Data Inicial:</label>
                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    <label htmlFor="endDate">Data Final:</label>
                    <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                    <label htmlFor="transactionType">Tipo de Transação:</label>
                    <select
                        id="transactionType"
                        value={transactionType}
                        onChange={(e) => setTransactionType(e.target.value)}
                    >
                        <option value="all">Todas</option>
                        <option value="cash-in">Cash In</option>
                        <option value="cash-out">Cash Out</option>
                    </select>
                    <button onClick={handleFilter}>Filtrar</button>
                </TransactionFilter>

                <TransactionTable>
                    <h2>Histórico de Transações</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Tipo</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTransactions
                            .sort((a, b) => new Date(b.date) - new Date(a.date))
                            .map((transaction) => (
                                <tr key={transaction.id}>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.type}</td>
                                    <td>{transaction.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </TransactionTable>
                <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            <FormLine />
        </>
    );
};

export default HomePage;
