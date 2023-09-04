import { useState } from "react";
import { Button } from "./Button";
import "./Modal.css";
import { Input } from "../Input/Input";

interface ModalProps {
  startTitle?: string
  title: string;
  description: string;
  changeDescription?: (e: string) => void;
  openModal?: () => void;
  setCards?: (e: string) => void;
}

export const Modal = ({
  startTitle,
  openModal,
  title,
  setCards,
  changeDescription,
  description,
}: ModalProps) => {
  const [comment, setComment] = useState<boolean>(false);

  const [descriptionWindow, setDescription] = useState<boolean>(false);
  const [call, setCall] = useState<boolean>(false);

  const calToggle = () => setCall(!call);
  const openDescription = () => setDescription(!descriptionWindow);
  const createComment = () => setComment(!comment);

  return (
    <>
      <div className="modal">
        <div className="modal-dialog">

          {startTitle ? (<>
            <h2>{startTitle}</h2>
          <Input
              inputValue={title}
              close={openModal}
              setTitle={setCards}
              placeholder='Please enter your name'
            />
            </>) : (<>{!call ? (
            <h2 className="title" onClick={calToggle}>
              {title}
            </h2>
          ) : (
            <Input
              inputValue={title}
              close={calToggle}
              setTitle={setCards}
              placeholder="Enter name title:"
            />
          )}</>)}
          
          
          
          {!startTitle && (<>
            <div className="close-modal">
            <Button onClick={openModal}>X</Button>
          </div>
          <div className="discription">
            {!descriptionWindow ? (
              <p className="discription-title" onClick={openDescription}>
                {description}
              </p>
            ) : (
              <Input
                placeholder="Enter description:"
                inputValue={description}
                close={openDescription}
                setTitle={changeDescription}
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
          </div></>)}
          
        </div>
      </div>
    </>
  );
};
