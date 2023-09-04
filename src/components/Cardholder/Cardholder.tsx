import React, { useState } from "react";
import { Card } from "../Card/Card";
import { Modal } from "../UI/Modal";
import "./Cardholder.css";
import { CardholderTitle } from "./CardholderTitle";
import CardholderCardAdd from "./CardholderCardAdd";

export interface CardholderProps {
  title: string;
}

interface CardProps {
  id: number;
  title: string;
  description?: string;
}

function Cardholder({ title }: CardholderProps) {
  const [modal, setModal] = useState<number>();
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [cards, setCards] = useState<CardProps[]>([]);
  const [callModal, setCallModal] = useState<boolean>(false);

  const calToggleModal = () => setCallModal(!callModal);

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
        setModalTitle(e.title);
        setModalDescription(e.description || 'empty')
      }
    });
  };

  const changeDescription = (description: string) =>  {
    cards.forEach((e) => {
      if (e.id === modal) {
        setModalDescription(description);
        e.description = description;
      }
    });
  };

  const changeTitle = (title: string) => {
    cards.forEach((e) => {
      if (e.id === modal) {
        e.title = title;
        setModalTitle(title);
      }
    });
    setCards((prev) => prev);
  };

  return (
    <div className="cardholder">
      <CardholderTitle title={title}></CardholderTitle>
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
      <CardholderCardAdd setCards={setCards}></CardholderCardAdd>
      {callModal && (
        <Modal
          title={modalTitle}
          openModal={calToggleModal}
          setCards={changeTitle}
          changeDescription={changeDescription}
          description={modalDescription}
        ></Modal>
      )}
    </div>
  );
}

export default Cardholder;
