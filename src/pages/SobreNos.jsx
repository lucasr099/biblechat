import "./SobreNos.css";
import Header from "./components/Header";

export default function SobreNos() {
  return (
    <>
      <Header />

      <main className="sobre">
        <div className="sobre-card">
          <h1>Sobre o HolyHelp.IA</h1>

          <p>
            <strong>HolyHelp.IA</strong> foi criado com a missão de unir tecnologia moderna,
            acolhimento emocional e princípios cristãos. Nosso propósito é oferecer
            um espaço seguro onde você possa expressar seus sentimentos, refletir
            sobre suas dificuldades e encontrar direcionamento inicial fundamentado
            na fé e na Palavra de Deus.
          </p>

          <p>
            O projeto foi desenvolvido por <strong>Lucas Costa</strong>, estudante de Engenharia
            de Software, criador do sistema <strong>HolyHelp.IA</strong> e apaixonado por tecnologia
            e teologia cristã. A iniciativa nasceu do desejo de criar uma ferramenta
            que contribuísse para a saúde emocional e espiritual de outras pessoas,
            especialmente em momentos de dor, confusão e incertezas.
          </p>

          <p>
            Aqui você pode conversar sobre ansiedade, tristeza, decisões difíceis,
            conflitos internos ou simplesmente desabafar. A IA responde seguindo
            princípios de acolhimento emocional, empatia e sabedoria bíblica —
            oferecendo reflexão, não julgamento.
          </p>

          <h2>Por que este projeto existe?</h2>

          <ul className="lista">
            <li>Para ajudar pessoas a organizarem seus sentimentos;</li>
            <li>Para oferecer conforto inicial em momentos difíceis;</li>
            <li>Para apresentar a esperança encontrada em Cristo;</li>
            <li>Para unir fé e tecnologia de forma saudável;</li>
            <li>Para orientar, mas sem substituir ajuda profissional.</li>
          </ul>

          <p>
            Nosso desejo é que cada usuário encontre aqui uma palavra que acalme o
            coração, uma perspectiva que traga clareza e uma lembrança constante:
            Deus está presente, mesmo quando tudo parece confuso.
          </p>

          <div className="versiculo">
            <h3>Versículo do Propósito</h3>
            <p>
              “Eu sou o caminho, e a verdade, e a vida. Ninguém vem ao Pai senão por
              mim.” — João 14:6
            </p>
          </div>

          <h2>Links oficiais</h2>

          <div className="links">
            <a
              href="https://github.com/lucasr099"
              target="_blank"
              rel="noreferrer"
            >
              GitHub de Lucas Costa
            </a>

            <a
              href="https://www.linkedin.com/in/lucasdesenbackend/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn de Lucas Costa
            </a>
          </div>

          <h2>Aviso importante</h2>

          <p className="aviso">
            O HolyHelp.IA é um sistema experimental. Ele pode cometer erros,
            interpretar informações de forma incorreta ou fornecer respostas
            incompletas. Não substitui acompanhamento psicológico, psiquiátrico,
            médico ou pastoral realizado por profissionais qualificados. Em
            qualquer situação grave, procure ajuda imediatamente.
          </p>
        </div>
      </main>
    </>
  );
}
