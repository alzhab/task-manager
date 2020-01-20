import React from "react";

const PostCard = () => {
  return (
    <div className="card horizontal">
      <div className="card-stacked">
        <div className="card-content">
          <div className="row">
            <h5 className="m0 col s6">Name: </h5>
            <h5 className="m0 col s6">Email: </h5>
          </div>
          <p>
            I am a very simple card. I am good at containing small bits of
            information.
          </p>
        </div>
        <div className="card-action">
          <a href="#">Отредактировать</a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
