import Thumbnail from "./Thumbnail";
import FlipMove from 'react-flip-move'

// tailwind css
const tailDiv =
     "px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center";

function Results({ results }) {
     return (
          <FlipMove className={tailDiv}>
               {results.map((result) => (
                    <Thumbnail key={result.id} result={result} />
               ))}
          </FlipMove>
     );
}

export default Results;
