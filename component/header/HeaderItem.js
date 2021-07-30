function HeaderItem({ Icon, title }) {
    // tailwind css
     const tailDiv =
          "flex flex-col items-center group cursor-pointer w-12 sm:w-20 hover:text-white";
     const tailIcon = "h-8 mb-1 group-hover:scale-110";
     const tailP = "opacity-0 group-hover:opacity-100 tracking-widest";

     return (
          <div className={tailDiv}>
               <Icon className={tailIcon} />
               <p className={tailP}>{title}</p>
          </div>
     );
}

export default HeaderItem;
