import React, { useState } from 'react'
import { Input } from '../Input/Input';
import { CardProps } from '../Card/Card';
import { CardholderProps } from './Cardholder';




export default function CardholderCardAdd({setCards}:any) {
  const [callCard, setCallCard] = useState<boolean>(false);
  const calToggleCard = () => setCallCard(!callCard);

  const addCard = (value: string) => {
    setCards((prev:CardProps[]) => [...prev, { id: Date.now(), title: value, description: 'enter description' }]);
    calToggleCard();
  };
  return (
    <>
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
    </>
  )
}

