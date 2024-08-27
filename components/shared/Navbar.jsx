'use client'
import Image from 'next/image';
import AudioPlayer from "./AudioPlayer"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { BarChartBig, CirclePlusIcon, Heart, HomeIcon, Search, SquarePlusIcon, ListCollapse } from "lucide-react"
import Footer from './Footer';

const NavbarArtist = () => {
  return (
    <NavigationMenu className="sticky bottom-0 sm:relative flex-col justify-normal sm:max-w-[280px] sm:gap-[24px] sm:py-[40px] sm:px-[21px] bg-custom-violet text-white">
      <div className="flex sm:flex-col sm:w-[238px]">
        <NavigationMenuItem className="list-none sm:w-[218px] h-[60px]">
          <div className="sm:w-[130px] h-[60px] flex ">
            <NavigationMenuLink href='/' className="w-[60px] h-[60px] flex items-center justify-center">
              <HomeIcon />
            </NavigationMenuLink>
            {/* <NavigationMenuLink href="/" className="hidden sm:block flex items-center justify-center w-[70px] h-[56px] gap-[10.36px] py-[15.54px] px-[0px] text-[26px] font-[700] leading-[24px] tracking-[-0.45px]">
              Home
            </NavigationMenuLink> */}
          </div>
        </NavigationMenuItem>
        <NavigationMenuItem className="list-none sm:w-[218px] h-[60px]">
          <div className="sm:w-[116px] h-[60px] flex ">
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <Search />
            </div>
            {/* <NavigationMenuLink href="/" className="hidden sm:block flex items-center justify-center w-[56px] h-[56px] gap-[10.36px] py-[15.54px] px-[0px] text-[18px] font-[700] leading-[24px] tracking-[-0.45px]">
              Search
            </NavigationMenuLink> */}
          </div>
        </NavigationMenuItem>

        <NavigationMenuItem className="list-none sm:w-[218px] h-[60px]">
          <div className="sm:w-[160px] h-[60px] flex ">
            <NavigationMenuLink href='/dashboard' className="w-[60px] h-[60px] flex items-center justify-center">
              <BarChartBig />
            </NavigationMenuLink>
            {/* <NavigationMenuLink href="/dashboard" className="hidden sm:block flex items-center justify-center h-[56px] gap-[10.36px] py-[15.54px] px-[0px] text-[18px] font-[700] leading-[24px] tracking-[-0.45px]">
              Dashboard
            </NavigationMenuLink> */}
          </div>
        </NavigationMenuItem>
        <NavigationMenuItem className="list-none sm:w-[218px] h-[60px]">
          <div className="sm:w-[160px] h-[60px] flex ">
            <NavigationMenuLink href='/library' className="w-[60px] h-[60px] flex items-center justify-center">
              <Heart />
            </NavigationMenuLink>
            {/* <NavigationMenuLink href="/" className="hidden sm:block flex items-center justify-center h-[56px] gap-[10.36px] py-[15.54px] px-[0px] text-[18px] font-[700] leading-[24px] tracking-[-0.45px]">
              Your library
            </NavigationMenuLink> */}
          </div>
        </NavigationMenuItem>
        <DropdownMenu >
          <DropdownMenuTrigger className="w-[60px] h-[60px] flex items-center justify-center">
            <ListCollapse />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-custom-violet text-white border-none min-w-full">
            <div className="flex sm:flex-col justify-center sm:w-[238px] py-2">
              <NavigationMenuItem className="list-none sm:w-[218px] h-[60px]">
                <div className="sm:w-[186px] h-[56px] flex ">
                  <div className="w-[60px] h-[60px] flex items-center justify-center ">
                    <div className="bg-white w-[30px] h-[30px] flex items-center justify-center rounded-md">
                      <CirclePlusIcon color="#AB7ED2" size={20} />
                    </div>
                  </div>
                  <NavigationMenuLink href="/" className="flex items-center justify-center h-[56px] gap-[10.36px] py-[15.54px] px-[0px] text-xs font-[700] leading-[24px] tracking-[-0.45px]">
                    Create playlist
                  </NavigationMenuLink>
                </div>
              </NavigationMenuItem>
              <NavigationMenuItem className="list-none sm:w-[218px] h-[60px]">
                <div className="sm:w-[186px] h-[56px] flex ">
                  <div className="w-[60px] h-[60px] flex items-center justify-center ">
                    <NavigationMenuLink href='/artist' className="bg-white w-[30px] h-[30px] flex items-center justify-center rounded-md overflow-hidden">
                      <img src="logo.jpeg" alt="album image" className='w-[56px] h-[56px] object-contain' />
                    </NavigationMenuLink>
                  </div>
                  <NavigationMenuLink href="/artist" className="flex items-center justify-center h-[56px] gap-[10.36px] py-[15.54px] px-[0px] text-xs font-[700] leading-[24px] tracking-[-0.45px]">
                    Your profile
                  </NavigationMenuLink>
                </div >
              </NavigationMenuItem >
            </div >
          </DropdownMenuContent >
        </DropdownMenu >
      </div>

      {/* <Footer /> */}
      < AudioPlayer />
    </NavigationMenu >
  )
}

export default NavbarArtist
