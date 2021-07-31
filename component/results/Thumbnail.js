/* eslint-disable react/display-name */
import Image from "next/image";
import { forwardRef } from "react";
import { HeartIcon } from "@heroicons/react/outline";

// tailwind css
const tailWrapperDiv =
     "group p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50";
const tailTextDiv = "p-2";
const tailTextP1 = "truncate max-w-md";
const tailTextH2 =
     "mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold";
const tailTextP2 = "flex items-center opacity-0 group-hover:opacity-100";
const tailThumbIcon = "h-5 mx-2";

const Thumbnail = forwardRef(({ result }, ref) => {
     const BASE_URL = "https://image.tmdb.org/t/p/original/";

     return (
          <div ref={ref} className={tailWrapperDiv}>
               <Image
                    src={
                         `${BASE_URL}${
                              result.backdrop_path || result.poster_path
                         }` || `${BASE_URL}${result.poster_path}`
                    }
                    layout='responsive'
                    height={1080}
                    width={1920}
                    alt='res'
               />

               {/* text */}
               <div className={tailTextDiv}>
                    <p className={tailTextP1}>{result.overview}</p>
                    <h2 className={tailTextH2}>
                         {result.title || result.original_name}
                    </h2>

                    {/* date and likes */}
                    <p className={tailTextP2}>
                         {result.media_type && `${result.media_type} .`}{" "}
                         {result.release_date || result.first_air_date} .{" "}
                         <HeartIcon className={tailThumbIcon} />{" "}
                         {result.vote_count}
                    </p>
               </div>
          </div>
     );
});

export default Thumbnail;
