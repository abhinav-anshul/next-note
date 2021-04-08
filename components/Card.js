import classes from "./Card.module.css";
function Card({ id, title, description }) {
  const sentence = description;
  const words = sentence.split(" ");
  return (
    <div>
      <button className={classes.buttoncard}>
        {id} <br />
        {title} <br />
        {null &&
          words[0] + " " + null &&
          words[1] + " " + null &&
          words[2] + "..."}
      </button>
    </div>
  );
}

export { Card };
