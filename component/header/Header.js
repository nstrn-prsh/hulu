import Image from "next/image";
import {
     CollectionIcon,
     HomeIcon,
     LightningBoltIcon,
     BadgeCheckIcon,
     SearchIcon,
     UserIcon,
} from "@heroicons/react/outline";
import huluLogo from "./../../assets/huluwhite.png";
import HeaderItem from "./HeaderItem";

// tailwind css
const tailHeader =
     "flex flex-col sm:flex-row m-5 justify-between items-center h-auto";
const tailDiv = "flex flex-grow justify-evenly max-w-2xl";

function Header() {
     return (
          <header className={tailHeader}>
               <div className={tailDiv}>
                    <HeaderItem title='home' Icon={HomeIcon} />
                    <HeaderItem title='trending' Icon={LightningBoltIcon} />
                    <HeaderItem title='verified' Icon={BadgeCheckIcon} />
                    <HeaderItem title='collections' Icon={CollectionIcon} />
                    <HeaderItem title='search' Icon={SearchIcon} />
                    <HeaderItem title='account' Icon={UserIcon} />
               </div>

               <Image alt='hulu-logo' src={huluLogo} height={100} width={200} />
          </header>
     );
}

export default Header;
