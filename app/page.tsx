import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá Nara</h2>
        <p>Quarta-feita, 07 de agosto</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative h-[150px] w-full">
          <Image
            src="/Banner01.png"
            fill
            className="rounded-xl object-cover"
            alt="agende com os melhores"
          />
        </div>
      </div>
    </div>
  )
}
export default Home
