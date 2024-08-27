'use client'
import { Button } from "../components/ui/button";
import CardArtist from "../components/shared/CardArtist";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const Artists = [
  { name: "Riders on the Block", src: "logo.jpeg", date: "2024" },
  { name: "Bon Iver", src: "artistsbon_iver.png", date: "2018" },
  { name: "Peggy Gou", src: "peggy_gou.png", date: "2022" },
  { name: "Phoebe Bridgers", src: "phoebe_bridgers.png", date: "2024" }
]

const Playlists = [
  { name: "Electronica Mix", src: "playlists_electronica_mix.png", date: "2024" },
  { name: "Discover Weekly", src: "playlists_discover_weekly.png", date: "2024" },
  { name: "Serotonin", src: "playlists_serotonin.png", date: "2024" },
  { name: "Your Top Songs 2022", src: "playlists_top_songs_2022.png", date: "2024" },
  { name: "Blend", src: "playlists_blend.png", date: "2024" }
]

export default function Home() {
  return (
    <div className='px-4 pt-5'>
      <h2 className='text-[36px] pb-12'>GOOD EVENING, <span className="italic">Riders</span></h2>
      <section className='mb-12'>
        <h3 className='pb-7 text-[24px]'>Your Top 5 Artists this Week</h3>
        <div className='flex space-x-5 w-full '>
          <Carousel className="w-full">
            <CarouselContent >
              {
                Artists.map((artist, index) => (
                  <CarouselItem key={index} className=" justify-center flex">
                    <CardArtist name={artist.name} src={artist.src} date={artist.date} />
                  </CarouselItem>)
                )
              }
            </CarouselContent>
          </Carousel>
        </div>
      </section >
      <section>
        <h3 className='pb-7 text-[24px] lending-[33px]'>Playlists Featuring you <span className="italic">Riders</span></h3>
        <div className='flex space-x-5 w-full '>
          <Carousel className="w-full">
            <CarouselContent>
              {
                Playlists.map((playlist, index) => (
                  <CarouselItem key={index} className=" justify-center flex">
                    <CardArtist name={playlist.name} src={playlist.src} date={playlist.date} />
                  </CarouselItem>)
                )
              }
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </div >
  );
}
