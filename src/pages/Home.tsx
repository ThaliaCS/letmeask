import {useHistory} from 'react-router-dom';

import {auth, firebase} from '../services/firebase';

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import '../styles/auth.scss';
import Button from "../components/Button";

export default function Home() {

  const history = useHistory();

  function signIn(){

  }

  function handleCreateRoom(){

    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result => {
      console.log(result);

      history.push('/rooms/new'); 
    });

  }

  return (
    <div id="page-auth"> 
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie sala de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button  onClick={handleCreateRoom} className="create-room"> 
            <img src={googleIconImg} />
            Crie uma sala com o google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input 
            type=""
            placeholder="Digite o código da sala"
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
