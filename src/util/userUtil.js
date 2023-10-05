// Função para obter o nome de usuário registrado
export function getRegisteredNickname() {
    // Recupere o nome de usuário armazenado no localStorage (ou onde quer que esteja armazenando)
    const nickname = localStorage.getItem("nickname");
    return nickname; // Retorna o nome de usuário ou uma string vazia se não estiver definido
  }
  
  // Função para definir o nome de usuário registrado
  export function setRegisteredNickname(nickname) {
    // Armazene o nome de usuário no localStorage (ou onde preferir)
    localStorage.setItem("nickname", nickname);
  }
  