'use client'
import React from 'react'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../../components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
}


const chartData = [
  { month: "January", stream: 80 },
  { month: "February", stream: 200 },
  { month: "March", stream: 120 },
  { month: "April", stream: 190 },
  { month: "May", stream: 130 },
  { month: "June", stream: 140 },
]

const topFans = [
  { name: "Electronica Mix", src: "playlists_electronica_mix.png", stream: "3548", title: "Block", revenue: "1450" },
  { name: "Discover Weekly", src: "playlists_discover_weekly.png", stream: "2524", title: "0xStorm", revenue: "780" },
  { name: "Serotonin", src: "playlists_serotonin.png", stream: "2247", title: "Years old", revenue: "1116" },
  { name: "Your Top Songs 2022", src: "playlists_top_songs_2022.png", stream: "1758", title: "Only", revenue: "2467" },
  { name: "Blend", src: "playlists_blend.png", stream: "1555", title: "December 23", revenue: "5401" }
]


const page = () => {
  return (
    <div className='px-4 pt-5'>
      <h2 className='text-[36px] pb-12'><span className="italic">Riders</span> DASHBOARD</h2>
      <section className='mb-20'>
        <h3 className='pb-7 text-lg'>OVERVIEW</h3>
        <div className='min-h-20 flex justify-between '>
          <div><h3>Stream on Echo</h3><p className='font-bold text-right text-[#2563eb]'>128.7K</p></div>
          <div><h3>Revenues</h3><p className='font-bold text-right text-[#2563eb]'>$165.02</p></div>
        </div>
        <ChartContainer config={chartConfig} className="min-h-52 w-full ">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              dataKey="stream"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="stream" fill="var(--color-mobile)" radius={0} />
          </BarChart>
        </ChartContainer>
      </section>
      <section className='mb-20'>
        <div className='flex justify-between'>
          <h4 className='pb-7'>TOP FANS</h4>
          <h4 className='pb-7'>STREAMS</h4>
        </div>
        <div className=''>
          {
            topFans.map((fan, index) => (
              <Card Card className="flex items-center justify-between rounded-none bg-transparent border-none mb-4" >
                <CardContent className="flex items-center p-4">
                  <img src={fan.src} alt="album image" className='w-10 rounded-full mr-2' />
                  <CardDescription className="max-w-40 text-white truncate ">
                    {fan.name}
                  </CardDescription>
                </CardContent>
                <CardContent className="flex items-center p-4 text-[#2563eb] font-bold">{fan.stream}</CardContent>
              </Card >
            ))
          }
        </div>
      </section>
      <section className='mb-20'>
        <div className='flex justify-between'>
          <h4 className='pb-7'>TITLE</h4>
          <h4 className='pb-7'>TOP FAN</h4>
          <h4 className='pb-7'>STREAMS</h4>
          <h4 className='pb-7'>REVENUES</h4>
        </div>
        <div>
          {
            topFans.map((fan, index) => (
              <Card Card className="flex items-center justify-between rounded-none bg-transparent border-none mb-4" >
                <CardContent className="flex p-4 pl-0">{fan.title}</CardContent>
                <CardContent className="flex  p-4 pl-0">
                  <img src={fan.src} alt="album image" className='w-10 rounded-full mr-2' />
                </CardContent>
                <CardContent className="flex items-center p-4 pl-0">{fan.stream}</CardContent>
                <CardContent className="flex items-center p-4 text-[#2563eb] font-bold">{fan.revenue}</CardContent>
              </Card >
            ))
          }
        </div>
      </section>
    </div >
  )
}

export default page