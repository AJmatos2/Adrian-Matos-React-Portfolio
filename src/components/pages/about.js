import React from "react";
import profilePicture from "../../../static/assets/images/auth/bio/placeHolder.jpg";

export default function about() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="right-column">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare
          suspendisse sed nisi lacus sed viverra. Non quam lacus suspendisse
          faucibus interdum posuere lorem. Tempor id eu nisl nunc mi ipsum
          faucibus vitae aliquet. Sit amet dictum sit amet. Eu sem integer vitae
          justo eget. Egestas integer eget aliquet nibh praesent tristique magna
          sit amet. Natoque penatibus et magnis dis parturient. Tincidunt augue
          interdum velit euismod. Sapien faucibus et molestie ac feugiat sed
          lectus vestibulum. Praesent elementum facilisis leo vel. Luctus
          accumsan tortor posuere ac ut consequat. Eget egestas purus viverra
          accumsan in nisl nisi scelerisque eu. Egestas integer eget aliquet
          nibh praesent tristique magna sit. Habitasse platea dictumst quisque
          sagittis purus sit amet volutpat consequat. Orci a scelerisque purus
          semper eget duis at tellus.
          <br />
          Venenatis tellus in metus vulputate eu scelerisque felis imperdiet
          proin. Felis eget nunc lobortis mattis aliquam faucibus purus in
          massa. Orci phasellus egestas tellus rutrum tellus pellentesque.
          Ultrices tincidunt arcu non sodales neque sodales ut etiam. Ipsum nunc
          aliquet bibendum enim facilisis gravida. Ultrices vitae auctor eu
          augue ut lectus. Urna nunc id cursus metus. Pretium aenean pharetra
          magna ac placerat vestibulum lectus mauris. Laoreet suspendisse
          interdum consectetur libero id faucibus. Neque sodales ut etiam sit
          amet nisl purus. Lorem mollis aliquam ut porttitor leo a diam
          sollicitudin.
        </p>
      </div>
    </div>
  );
}
