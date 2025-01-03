import Image from "next/image"
import Link from "next/link";

const Nav = () => {
  return (
    <div className="z-[6001] w-[90%] max-sm:w-[97%] opacity-90 text-white md:mt-16 mt-10 mr-auto md:ml-16 ml-1 " >
      
   <div className="flex items-center justify-between" >

      <Link href="/" >
        <Image 
          src="Wisdom Logo-W.svg" 
          alt="Wisdom Logo-W.svg"
          width={60}  
          height={60}
        />
      </Link>


      <Link href="https://github.com/Aeroox-K" target="_blank" rel="noopener noreferrer" >
        <Image 
          src="/git.svg" 
          alt="github"
          width={27}  
          height={27}
        />
      </Link>



   </div>
    
    </div>
  )
}

export default Nav;
