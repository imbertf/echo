import { FileIcon } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center min-h-10">
      <Link href="https://citrine-transport-b34.notion.site/ECHO-Documentation-d556a5cd62134b8a876414e3bbbe2cea" passHref target="_blank" rel="noopener noreferrer" className="flex mb-2"><FileIcon />Documentation</Link>
      <p >All rights reserved &copy;Riders on the Block - {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer