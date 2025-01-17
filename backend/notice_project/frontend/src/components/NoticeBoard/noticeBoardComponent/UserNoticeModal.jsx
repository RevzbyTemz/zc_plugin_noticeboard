import React from "react";
import "./UserNoticeModal.css";
import { Button } from "@material-ui/core";
import moment from "moment";


import UserMenu from "./UserMenu/UserMenu";
import imgPlaceholder from '../../../assets/noticePlaceholderImage.svg'


function UserNoticeModal({ person }) {
  const id = String(person._id);
  const modal_id = `modal_${id}`;
  const paragraphs = person.message;

  const CloseModal = (event) => {
    const clickedButton = event.currentTarget.getAttribute("id");
    const modal_id = `modal_${clickedButton}`;
    document.getElementById(modal_id).style.display = "none";
  };

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.getElementById(modal_id).style.display = "none";
    }
  });

  return (
    <div className="userNoticeModal" id={modal_id}>
      <div className="userNoticeModal-container">
        <div className="userNoticeModal-innerContainer">
          <div className="userNoticeModal-userInfo">
            <div className="userNoticeModal-imageAndText">
              <div className="userNoticeModal-imageContainer">
                <img
                  className="userNoticeModal-image"
                  src={
                    person.author_img_url !== "null"
                      ? person.author_img_url
                      : imgPlaceholder
                  }
                  alt="user"
                />
              </div>
              <div className="userNoticeModal-textContainer">
                <h1 className="userNoticeModal-username">
                  {person.author_username}
                </h1>
                <div className="userNoticeModal-timeStamp">
                  <span className="userNoticeModal-stampDay">
                    {moment(person.created).fromNow()}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <UserMenu />
            </div>
          </div>
          <div>
            <h2 className="userNoticeModal-title">{person.title}</h2>
          </div>

          <p className="userNoticeModal-paragraph">{person.message}</p>

          <div className="closeModalButton-container">
            <Button
              className="closeModalButton"
              variant="contained"
              id={id}
              onClick={(event) => CloseModal(event)}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserNoticeModal;
