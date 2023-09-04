import React, { useState } from "react";
import { Modal } from "../UI/Modal";
import User from "../User/User";

export default function StartPage() {
  const [userName, setUserName] = useState("");
  const [callModal, setCallModal] = useState<boolean>(true);
  const calToggleModal = () => setCallModal(!callModal);
  return (
    <>
      {userName && <User title={userName} changeUser={calToggleModal}></User>}
      {callModal && (
        <Modal
          openModal={calToggleModal}
          setCards={setUserName}
          startTitle="Hello!"
          title={userName}
          description=""
        ></Modal>
      )}
    </>
  );
}
