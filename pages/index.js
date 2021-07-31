import Head from "next/head";
import Header from "../component/header/Header";
import Nav from "../component/nav/Nav";
import Results from "../component/results/Results";
import request from "../utils/request";

export default function Home(props) {
     const res = props.results
     // console.log(`Home-index.js:`, res);

     return (
          <div>
               <Head>
                    <title>Hulu</title>
                    <link rel='icon' href='/favicon.ico' />
               </Head>

               <Header />
               <Nav />

               <Results results={res}/>
          </div>
     );
}

// ssr page : it'll execute before render
export async function getServerSideProps(context) {
     const genre = context.query.genre;
     // get tmdb api
     const requests = await fetch(
          `https://api.themoviedb.org/3${
               request[genre]?.url || request.fetchTrending.url
          }`
     );
     const data = await requests.json();

     if (!data) {
          return {
               notFound: true,
          };
     }

     return {
          props: data
     };
}
