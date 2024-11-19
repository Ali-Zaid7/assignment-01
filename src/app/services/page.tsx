import Link from 'next/link';
export default function Services() {
    return (
     <body> <div className="text-center text-7xl">
        <Link href="/web-devt" passHref> <div> Web development </div></Link>
        <Link href="/app-devt" passHref> <div>App development </div> </Link>
      </div></body>
    )
  }
  
 
  