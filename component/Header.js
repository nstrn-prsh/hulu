import { Image } from "next/image";

function Header() {
     return (
          <header className=''>
               <h1>this is the header</h1>
               <Image
                    alt='hulu-logo'
                    src='https://links.papareact.com/ua6'
                    height={100}
                    width={200}
               />
          </header>
     );
}

export default Header;
