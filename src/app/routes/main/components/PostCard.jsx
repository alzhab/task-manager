import React from "react";

const PostCard = ({ data }) => {
  return (
    <div className="card horizontal">
      <div className="card-stacked">
        <div className="card-content">
          <div className="row">
            <h6 className="m0 col s6">Name: {data.username}</h6>
            <h6 className="m0 col s6">Email: {data.email}</h6>
          </div>
          <p>{data.text}</p>
        </div>
        <div className="card-action">
          <a href="#">Отредактировать</a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
