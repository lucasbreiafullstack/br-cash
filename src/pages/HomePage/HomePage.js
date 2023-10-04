import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
    Container,
    FormLine
} from "./homestyle";
import ToastAnimated, { showToast } from "../../Components/Toast/Toast";
import useProtectedPage from "../../hooks/use-protected-page";

const HomePage = () => {
    const history = useHistory();
    useProtectedPage(history);

    const [isLoading, setIsLoading] = useState(false);
    const [balance, setBalance] = useState(1000); // Saldo inicial simulado
    const [transactionData, setTransactionData] = useState([]); // Estado para as transações
    const [filteredTransactions, setFilteredTransactions] = useState([]); // Estado para transações filtradas
    const [startDate, setStartDate] = useState(""); // Estado para a data de início do filtro
    const [endDate, setEndDate] = useState(""); // Estado para a data final do filtro
    const [transactionType, setTransactionType] = useState("all"); // Estado para o tipo de transação

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
        history.push("/login");
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
        <Container>
            <FormLine />

                <BalanceContainer>
                    <p>Saldo da conta: R$ {balance}</p> {/* Exibe o saldo simulado */}
                </BalanceContainer>

                <TransactionSection>
                    <h2>Realizar Transferência</h2>
                    {/* Adicione os campos e botões para realizar transferências aqui */}
                </TransactionSection>

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
        </Container>
    );
};

export default HomePage;
