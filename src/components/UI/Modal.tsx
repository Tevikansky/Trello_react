import React, { useState} from "react";
import { Button } from "./Button";
import "./Modal.css";
import { Input } from "../Input/Input";
import { CardProps } from "../Card/Card";

interface ModalProps {
  title: string;
  useDescription?: string;
  openModal: () => void;
  setCards?: (e:string) => void;
}

export const Modal = ({ openModal, title, setCards}: ModalProps) => {
  const [modalTitle, setmodalTitle] = useState<string>(title)

  const [comment, setComment] = useState<boolean>(false);

  const [descriptionTitle, setDescriptionTitle] =
    useState<string>("description");

  const [description, setDescription] = useState<boolean>(false);
  const [call, setCall] = useState<boolean>(false);

  const calToggle = () => setCall(!call);
  const changeDescription = () => setDescription(!description);
  const createComment = () => setComment(!comment);

  return (
    <>
      <div className="modal">
        <div className="modal-dialog">
          {!call ? (
            <h2 className="title" onClick={calToggle}>
              {modalTitle}
            </h2>
          ) 
          : (
            <Input
              inputValue={modalTitle}
              close={calToggle}
              setTitle={setCards}
              placeholder="Enter name title:"
            />
          )
          }

          <div className="close-modal">
            <Button onClick={openModal}>X</Button>
          </div>
          <div className="discription">
            {!description ? (
              <p className="discription-title" onClick={changeDescription}>
                {descriptionTitle}
              </p>
            ) : (
              <Input
                placeholder="Enter description:"
                inputValue={descriptionTitle}
                close={changeDescription}
                setTitle={setDescriptionTitle}
              ></Input>
            )}
          </div>
          <div className="comments">
            <p className="comments-title">Comments:</p>
            <div className="add-comment">
              {!comment ? (
                <Button onClick={createComment}>Add comment</Button>
              ) : (
                <Input
                  placeholder="Enter comment:"
                  inputValue=""
                  close={createComment}
                ></Input>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
