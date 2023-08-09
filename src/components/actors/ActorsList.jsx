// import { Button } from "reactstrap";
// import "./ActorsList.css"

// export const ActorsList = ({actors}) => {
//   return (
//     <div>
//       <ul>
//         {actors.map((actor) => (
//           <li key={actor.id}>
//             <img
//               src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
//               alt=""
//             />
//             <div>
//               <Button color="primary" onClick={() => console.log("clicked")}>Click Me</Button>
//             </div>
//             {actor.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

import { SingleActor } from "./SingleActor";
import "./ActorsList.css";
export const ActorsList = ({ actors }) => {
  return (
    <div className="actors-container">
      {actors.map((actor) => {
        return <SingleActor {...actor} />;
      })}
    </div>
  );
};