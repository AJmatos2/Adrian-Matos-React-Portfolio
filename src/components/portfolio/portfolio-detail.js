import React from "react";

export default function (props) {
  return (
    <div>
      <h2>Portolio Detail for {props.match.params.slug}</h2>
    </div>
  );
}
