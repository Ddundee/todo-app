import Head from "next/head";
import React, { useState } from "react";

export default function Home() {
  const [cards, setCard] = useState({
    newNote: [],
    tempNote: ""
  })

  return (
    <React.Fragment>
      <Head>
        <title>Sticky Notes</title>
      </Head>
      <div className="flex flex-wrap flex-col h-[98vh] w-min gap-5 p-5">
        <div className="w-44 capitalize bg-yellow-300 shadow">
          <textarea value={cards.tempNote} id="usrform" rows="4" cols="20" name="comment" form="usrform" className="w-[164px] bg-yellow-300 border-2 border-black placeholder:text-gray-700" placeholder="Add Text Here..." onChange={event => { setCard({ newNote: cards.newNote, tempNote: event.target.value }) }} />
          <button type="submit" className="bg-gray-300 p-[1px] border-gray-500 border-2 active:border-none active:p-[3px]" onClick={(event) => {
            let tempCards = cards.newNote;
            tempCards.unshift(cards.tempNote);
            setCard({ newNote: tempCards, tempNote: "" });
          }}>
            Submit
          </button>
        </div>

        {cards.newNote.map(card => {
          return (
            <div key={card} className="w-44 p-3 capitalize bg-yellow-300 shadow">
              {card}
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}
