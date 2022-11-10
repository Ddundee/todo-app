import Head from "next/head";
import React, { useState } from "react";

export default function Home() {
  const [cards, setCard] = useState({
    notes: [],
    tempNote: "",
    tempId: 0
  })

  return (
    <React.Fragment>
      <Head>
        <title>Sticky Notes</title>
      </Head>
      <div className="flex flex-wrap flex-col h-[98vh] w-min gap-5 p-5">
        <div className="w-44 capitalize bg-yellow-300 shadow">
          <textarea value={cards.tempNote} id="usrform" rows="4" cols="20" name="comment" form="usrform" className="w-[164px] bg-yellow-300 border-2 border-black placeholder:text-gray-700" placeholder="Add Text Here..." onChange={event => {
            setCard({ notes: cards.notes, tempNote: event.target.value, tempId: cards.tempId })
            logState() //
          }} />
          <button type="submit" className="m-1 bg-gray-300 p-[1px] border-gray-500 border-2 active:border-none active:p-[3px]" onClick={(event) => {
            let notes = cards.notes;
            let tempId = cards.tempId + 1;
            notes.unshift({ id: cards.tempId, str: cards.tempNote });
            setCard({ notes, tempNote: "", tempId });
            logState() //
          }}>
            Add
          </button>
          <button type="submit" className="m-1 bg-gray-300 p-[1px] border-gray-500 border-2 active:border-none active:p-[3px]" onClickCapture={(event) => {
            setCard({ notes: cards.notes, tempNote: "", tempId: cards.tempId });
            logState() //
          }}>
            Clear
          </button>
        </div>

        {cards.notes.map(card => {
          return (
            <div key={card.id} className="w-44 p-3 bg-yellow-300 shadow">
              {card.str}
              <button type="submit" className="m-1 bg-gray-300 p-[1px] border-gray-500 border-2 active:border-none active:p-[3px]" onClick={(event) => {
                let tempCards = cards.notes;
                for (let i = 0; i < cards.notes.length; i++) {
                  if (cards.notes[i].id == card.id && cards.notes[i].str == card.str) {
                    tempCards.splice(i, 1);
                    setCard({ notes: tempCards, tempNote: cards.tempNote, tempId: cards.tempId });
                    logState() //
                    return;
                  }
                }

              }}>
                Remove
              </button>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )

  function logState() {
    console.log(cards)
  }
}
