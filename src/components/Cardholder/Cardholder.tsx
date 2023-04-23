import React, { useState } from "react";
import { Card } from "../Card/Card";
import { Input } from "../Input/Input";
import { Modal } from "../UI/Modal";
import "./Cardholder.css";

interface CardholderProps {
  title: string;
}

interface CardProps {
  id: number;
  title: string;
  description?: string;
}

function Cardholder({ title }: CardholderProps) {
  const [call, setCall] = useState<boolean>(false);
  const [collumnTitle, setCollumnTitle] = useState<string>(title);
  const [modal, setModal] = useState<number>();
  const [modalTitle, setModalTitle] = useState('');
  const [cards, setCards] = useState<CardProps[]>([]);
  const [callCard, setCallCard] = useState<boolean>(false);
  const [callModal, setCallModal] = useState<boolean>(false);

  const calToggleModal = () => setCallModal(!callModal);
  const calToggle = () => setCall(!call);
  const calToggleCard = () => setCallCard(!callCard);

  const addCard = (value: string) => {
    setCards((prev) => [...prev, { id: Date.now(), title: value }]);
    calToggleCard();
  };

  const removeCard = (id: number) => {
    return function () {
      setCards((prev) => prev.filter((card) => card.id !== id));
    };
  };

  const getTittle = (id: number) => () => {
    calToggleModal();
    cards.forEach((e) => {
      if (e.id === id) {
        setModal(e.id);
        setModalTitle(e.title)
      }
    });
  };

  const changeTitle = (title: string) => {
    cards.forEach((e) => {
      if (e.id === modal) {
        e.title = title;
        setModalTitle(title)
      }
    })
    setCards((prev) => prev)
    ;
  };

  return (
    <div className="cardholder">
      {!call && (
        <h2 className="cardholder__title" onClick={calToggle}>
          {collumnTitle}
        </h2>
      )}
      {call && (
        <Input
          inputValue={collumnTitle}
          close={calToggle}
          setTitle={setCollumnTitle}
          placeholder="Enter name:"
          about="123"
        />
      )}

      <div className="cards-wrapper">
        {cards.length > 0 ? (
          cards.map((card) => {
            return (
              <Card
                id={card.id}
                title={card.title}
                key={card.id}
                removeCard={removeCard(card.id)}
                onClick={getTittle(card.id)}
              />
            );
          })
        ) : (
          <p>No tasks! </p>
        )}
      </div>
      {!callCard && (
        <div className="create-card" onClick={calToggleCard}>
          + Add card
        </div>
      )}
      {callCard && (
        <Input
          inputValue=""
          placeholder="Enter card name:"
          close={calToggleCard}
          setTitle={addCard}
        />
      )}
      {callModal && (
        <Modal
          title={modalTitle}
          openModal={calToggleModal}
          setCards={changeTitle}
        ></Modal>
      )}
    </div>
  );
}

export default Cardholder;
