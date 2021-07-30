import { useRouter } from "next/dist/client/router";
import request from "../../utils/request";
// tailwind css
const tailDiv1 =
     "flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide";
const tailH2 =
     "last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500";
const tailDiv2 =
     "absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12";

function Nav() {
     const router = useRouter();

     return (
          <nav className='relative'>
               <div className={tailDiv1}>
                    {/* loop in request to get title */}
                    {Object.entries(request).map(([key, { title, url }]) => (
                         <h2
                              key={key}
                              className={tailH2}
                              onClick={() => router.push(`/?genre=${key}`)}
                         >
                              {title}
                         </h2>
                    ))}
               </div>

               <div className={tailDiv2} />
          </nav>
     );
}

export default Nav;
