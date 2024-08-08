import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import { Image } from "lucide-react"

interface BarbershopItemProps {
  barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card>
      <CardContent>
        <div className="relative h-[159px]"></div>
        <Image fill className="object-contain" src={barbershop.imageUrl} />
      </CardContent>
    </Card>
  )
}

export default BarbershopItem
