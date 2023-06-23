import { Themed, Grid } from "theme-ui";
import 'Default.css';

export default function Project(props) {

  const pic = require('images/'+ props.src + ".png");

  return (


    <div>
  
      <p >{props.title}</p>

    <div className="container">
      <img src={pic} height="150" />
      <div className="containerblock">
      <p>{props.line1}<br></br>
        {props.line2}<br></br>
        <i>{props.line3}</i>
        </p>
        <a href={props.link}>{props.linktext}</a>
        </div>
    </div>


    </div>

  );
}