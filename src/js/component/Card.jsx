import React from "react";
export const Card = (props) => {
return (
<div className="card col">
  <img src={props.imageURL} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href="#" className="btn btn-primary">{props.textButton}</a>
  </div>
</div>
)
}
Card.defaultProps = {
    title: 'Somebody',
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    textButton: 'Learn More',
    imageURL: "https://randomuser.me/api/portraits/women/45.jpg",
    imageAlt: 'photo'

}