'use client'

import InputtForms from "@/src/components/InputtForms";
import { RxAvatar } from "react-icons/rx";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    
    try{
      const response = await fetch('http://localhost:8000/api/login', {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify({email, password}),
    });
     console.log('teste',response)
      if(response.ok){
        //autenticado com sucesso, logo redireciona para a rota da pagina principal
        const data = await response.json();
        console.log(data.user);
        router.push(data.redirectUrl);
      } else{
        setError("Usuário não encontrado ou credenciais inválidadas.")
      } 
    }catch(err){
      setError('erro na conexão com o servidor.')
    }
  };

  return (
    
    <main className="flex h-[100%] items-center justify-center bg-slate-100 ">
      <div className=" flex flex-col bg-gray-50 md:w-[25%] md:h-[50%] shadow-2xl rounded-2xl ">
        <div className="flex items-center justify-center  ">
          <RxAvatar className=" text-black w-24 h-24 absolute "  />
        </div>
          <div className="flex mt-16 justify-center items-center py-8 w-[100wh]">
            <form className="flex py-2 w-full justify-center flex-col items-center">
              <div className="w-2/4 py-1 hover:scale-110 ">
                <InputtForms type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div className="w-2/4 py-4 hover:scale-110 ">
                <InputtForms type="password" placeholder="Senha" value={password} onChange = {(e) =>setPassword(e.target.value)}/>
              </div>
              <div>
                <h5 className="flex items-center justify-center font-normal text-black py-2  cursor-pointer hover:text-blue-400 ">
                  <a href="/senhaforget">ESQUECI A SENHA</a>
                </h5>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center mb-4 md:mb-0">
            <button value="submit" className=" w-[30%] h-10 bg-slate-600 shadow-md rounded-md hover:scale-110 hover:bg-green-900 " onClick={handleLogin}>LOGIN</button>
          </div>
         <div>
          <h2 className="flex items-center justify-center text-black py-4  hover:text-blue-400 ">
            <a href="/cadastro">CADASTRE-SE</a>
          </h2>
         </div>
          {error && <div className="text-red-500 overflow-hidden">{error}</div>}
      </div>
    </main>
  );
}

