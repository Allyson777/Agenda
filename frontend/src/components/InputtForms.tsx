
interface InputProps {
    type: string;
    placeholder: string; // Definindo placeholder como uma propriedade
  }
export default function InputForms({placeholder, type}: InputProps){
    return(
    <div className='w-full'> 
        <input className="w-full h-10 bg-slate-600 shadow-md rounded-md hover:scale-110 hover:bg-sky-950 !pl-2" 
        type={type} placeholder={placeholder}/>
    </div>
    )
}