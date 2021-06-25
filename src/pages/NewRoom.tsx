import {Link, useHistory} from 'react-router-dom';
import {FormEvent, useState} from 'react';
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import '../styles/auth.scss';
import Button from "../components/Button";
import {database} from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

export default function NewRoom() {

  const {user} = useAuth();
  const [newRoom, setNewRoom] = useState('');
  const history = useHistory();

  async function handleCreateRoom(event: FormEvent){

    event.preventDefault();
    
    if(newRoom.trim() === ''){
      return;
    }

    //dentro do bd, uma categoria que se chama rooms
    const roomRef = database.ref('rooms');

    //jogando informação pra dentro de rooms, uma nova sala
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,

    });

    history.push(`/rooms/${firebaseRoom.key}`)

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
          <h2>Criar uma nova sala</h2>

          <form onSubmit={handleCreateRoom}> 
            <input 
            type=""
            placeholder="Nome da sala"
            onChange={event => setNewRoom(event.target.value)}
            value={newRoom}
            />
            <Button type="submit">Criar sala</Button>
            <p>Quer entrar em um sala existente? <Link to="/">Clique aqui</Link></p>
          </form>

        </div>
      </main>
    </div>
  );
}
