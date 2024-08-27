'use client'
import ReactPlayer from 'react-player';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { HeartIcon, Maximize2Icon, ShuffleIcon, Volume1Icon } from 'lucide-react';
import { Progress } from "../../components/ui/progress"


const AudioPlayer = () => (
  <div className='bg-custom-violet-dark py-5 w-full'>
    <Card Card className="flex items-center justify-between rounded-none bg-transparent border-none mb-4" >
      <CardContent className="flex items-center p-4">
        <img src="logo.jpeg" alt="album image" className='w-10 rounded-md mr-2' />
        <CardDescription className="max-w-40 text-white truncate ">
          <p>St0rm - Live at Shaka Biarritz</p>
          <p className='italic'>Riders on the Block</p>
        </CardDescription>
      </CardContent>
      <div className='p-4'>
        <HeartIcon color='white' />
      </div>
    </Card >
    <div className='max-h-16 px-4 mb-2'>
      <ReactPlayer
        url='/songs_test/3-DeepDive-0xStou-from0xStou.mp3'
        controls
        width="100%"
        height={40}
      />
    </div>
  </ div>
);

export default AudioPlayer;
