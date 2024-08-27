'use client'
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const CardArtist = ({ name, src, date }) => {

  return (
    <Card className="w-60 h-80 p-4 m-2 gap-4 bg-custom-violet-light border-none text-white shadow-md shadow-custom-violet">
      <CardContent className="w-[200px] h-[200px] rounded-full p-0 m-0 overflow-hidden">
        <img src={src} alt="album image" className='w-full h-full object-cover' />
      </CardContent>
      <CardHeader>
        <CardTitle className="text-[16px]">{name}</CardTitle>
        <CardDescription className="text-white">{date}</CardDescription>
      </CardHeader>
    </Card>

  )
}

export default CardArtist