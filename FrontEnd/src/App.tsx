import {MapPin, Calendar, ArrowRight} from 'lucide-react'

function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <p className="text-sm text-zinc-300">Convite seus amigos e familiares para sua próxima viagem!</p>
        
         
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
          <div className='flex items-center gap-2 flex-1'>
           <MapPin className='size-5 text-zinc-400' />
           <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400" />
          </div>

          <div className='flex items-center gap-2'>
            <Calendar className='size-5 text-zinc-400' />
            <input type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400" />
          </div>


          <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
          Continuar
          <ArrowRight className='size-5'/>
          </button>

        </div>
        <p className="text-sm text-zinc-300">
          Ao planejar sua viagem pelo Planner Travel, você automaticamente concorda <br />
           com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc300 underline"href="">políticas de privacidade.</a>
           
        </p>
      </div>
    </div>
  );
}

export default App;
