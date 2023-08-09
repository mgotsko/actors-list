import { Button } from "reactstrap";

import { ToolTipComponent } from "./ToolTipComponent"

export const SingleActor = ({ name, profile_path }) => {
    const id = name.split(" ").join("");
  return (
    <div className="single-actor" id={id}>
      <h3>{name}</h3>
      <img src={`https://image.tmdb.org/t/p/w185${profile_path}`} />
      <Button color="primary" onClick={() => console.log("clicked")}>
        Click Me
      </Button>
      <ToolTipComponent id={id} name = {name}/>
    </div>
  );
};
