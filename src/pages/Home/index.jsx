
export function Home() {
  return (
    <div className="h-auto bg-red-700 text-white p-2 flex flex-col items-center space-y-6">
      
      <header className="container max-w-3xl flex justify-center p-2">
      <img src="/imgs/logo.svg" className="w-40"></img>
      </header>
      
      <div className="container max-w-3xl p-2 flex-1 flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6">

        <div className="md:flex-1 flex justify-center">
          <img src="/imgs/photo.png" className="w-full max-w-md"></img>
        </div>

        <div className="md:flex-1 flex flex-col space-y-6">
          <h1 className="text-2xl text-center md:text-left font-bold">Dê o seu palpite na Copa do Mundo do Catar 2022!</h1>

          <a href="/signup" className=" text-center text-red-700 bg-white text-xl px-6 py-4 rounded-xl">
            Criar minha conta
          </a>

          <a href="/login" className=" text-center text-white border border-white text-xl px-6 py-4 rounded-xl">
            Fazer login
          </a>
        </div>

      </div>
    </div>
  )
}
