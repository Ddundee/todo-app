import Head from "next/head";
import React, { useState } from "react";

export default function Home() {
  const [cards, setCard] = useState({
    newNote: [
      'pharetra nostra nunc sem lobortis lectus rhoncus molestie conubia ac convallis aliquam sagittis suscipit class nisl hac duis ',
      'vehicula non mollis nunc lacinia aliquam scelerisque enim velit faucibus dui vehicula orci mollis taciti diam tincidunt cras ',
      'maecenas aenean sit ad consectetur torquent sociosqu id vel fringilla taciti commodo quis bibendum eleifend neque donec pretium ',
      'cubilia sollicitudin vel senectus mauris tortor porttitor quisque scelerisque interdum proin semper cursus netus nullam a tellus curabitur ',
      'sapien volutpat potenti ac integer undefined primis tortor leo sem rutrum habitant tincidunt placerat pharetra suscipit augue habitasse ',
      'cursus fermentum faucibus habitant suspendisse suspendisse leo habitant amet ipsum proin eros vulputate massa ullamcorper habitasse hac rutrum ',
      'etiam porta accumsan varius rhoncus gravida quis venenatis ligula mattis urna interdum a phasellus odio volutpat nisi blandit ',
      'platea placerat vestibulum risus leo proin nullam erat laoreet est malesuada dictum inceptos tincidunt sodales libero commodo viverra ',
      'gravida imperdiet venenatis himenaeos facilisis ut eu varius fusce netus vehicula tristique duis quisque condimentum curabitur lacinia mauris ',
      'etiam posuere sem pharetra mollis mi nibh conubia iaculis metus etiam litora urna faucibus viverra vitae adipiscing nam ',
      'maecenas faucibus mattis nisi quisque vehicula bibendum phasellus condimentum curabitur quam sociosqu ante aliquam consequat est placerat lobortis ',
      'orci etiam sem ipsum donec sed pharetra quisque donec semper integer tempor lobortis arcu donec tempus justo elementum ',
      'iaculis curabitur velit pulvinar placerat porttitor arcu phasellus duis molestie interdum lectus gravida donec est quis luctus aliquam ',
      'praesent ultrices curae ad a sociosqu sed enim sociosqu fermentum bibendum aliquam turpis varius cursus dui sed habitant ',
      'suscipit sagittis ut proin etiam justo vitae cras mi nulla quisque interdum convallis nullam metus placerat habitasse non ',
      'aliquam dui odio lacinia pharetra luctus in mauris neque euismod rutrum pretium sodales venenatis dictumst donec lobortis mauris ',
      'erat congue interdum venenatis congue nulla himenaeos ultrices enim bibendum pellentesque justo sapien donec torquent ipsum aliquam curabitur ',
      'semper vestibulum lacus sit per ultricies risus nullam cursus vivamus suspendisse nec aliquet erat nam sapien varius ullamcorper ',
      'varius curae per at lacus leo praesent proin mattis suspendisse ac diam at velit vestibulum varius curabitur lobortis ',
      'porttitor tristique interdum erat mattis class porttitor id platea ultricies nisi nibh consectetur egestas convallis metus justo ante ',
      'imperdiet ultrices nostra torquent est litora consectetur enim nullam suscipit platea lobortis leo curabitur dolor est pulvinar lobortis ',
      'purus eget interdum netus bibendum a pharetra sem primis mi etiam duis id rutrum suscipit euismod posuere nam ',
      'massa mattis porta feugiat magna per praesent arcu egestas accumsan vel ipsum ullamcorper posuere hac nisl suscipit sociosqu ',
      'aenean consequat egestas habitasse aenean gravida quisque adipiscing undefined risus tincidunt luctus fermentum himenaeos ut et integer morbi ',
      'at est felis non tortor ac platea purus imperdiet laoreet ut laoreet proin fringilla consectetur aenean ultricies magna ',
      'fringilla orci quisque libero consequat nibh auctor tristique eleifend vulputate nunc urna nam nibh nec egestas varius nibh ',
      'volutpat nibh libero sem litora magna class vel pulvinar platea eros a etiam phasellus accumsan placerat amet praesent ',
      'ullamcorper commodo non dictum congue blandit dictum curabitur duis magna nunc primis cras venenatis risus id amet iaculis ',
      'dictumst nunc sem proin blandit elementum in convallis risus sem aliquet feugiat commodo urna dui fringilla dictumst nostra ',
      'libero porta porta himenaeos rhoncus primis quisque congue faucibus pretium proin nec mollis fermentum non non quisque nostra ',
      'semper auctor potenti pharetra cursus eleifend elit neque blandit felis ipsum etiam curabitur proin phasellus non fusce netus ',
      'cursus pretium commodo pharetra quisque pulvinar aliquam massa cubilia etiam ad venenatis est aenean potenti tincidunt primis metus ',
      'aliquet diam dapibus vel aliquet varius est lectus nec posuere habitant torquent phasellus et nec auctor dui arcu ',
      'eros vestibulum lacinia risus maecenas eleifend etiam aenean amet aliquam egestas vestibulum etiam enim vestibulum hac eu tortor ',
      'enim fringilla taciti posuere conubia sapien euismod magna non curabitur tincidunt molestie imperdiet fames velit quisque etiam morbi ',
      'dictumst eros et urna nostra litora pulvinar tincidunt integer libero adipiscing aptent sollicitudin class feugiat interdum duis luctus ',
      'eleifend cubilia ac vestibulum dictum odio id mauris etiam adipiscing dictum mauris eros cubilia pharetra aliquet maecenas taciti ',
      'sodales consectetur felis orci massa nisi suspendisse convallis curae nisi commodo undefined aliquet primis purus pulvinar quisque pretium ',
      'nullam turpis habitasse condimentum netus fringilla feugiat imperdiet vitae venenatis curae blandit sed lacus phasellus laoreet per vulputate ',
      'elit enim blandit pellentesque bibendum mi odio molestie lacinia per venenatis primis enim sem nulla aptent nec quisque ',
      'laoreet et mi vehicula cursus porttitor euismod eleifend nam ultrices aptent orci ut nec aliquet lectus habitant curabitur ',
      'accumsan habitant venenatis blandit mollis diam elementum velit ad tristique tincidunt arcu semper etiam phasellus duis urna elit ',
      'senectus interdum aliquam ut nisi platea dapibus congue suscipit tellus blandit at ornare donec leo sociosqu urna sodales ',
      'vel nulla in netus consectetur mollis aliquam massa nec integer est pharetra cursus curae phasellus proin morbi cubilia ',
      'cursus dolor fusce cras egestas urna ut sit proin consectetur malesuada tortor est morbi accumsan turpis id gravida ',
      'ultricies ut urna felis ante porta fames iaculis imperdiet donec amet mattis lacus magna velit vel accumsan porta ',
      'elementum nibh interdum enim in diam leo quam pharetra fusce lectus aenean vivamus pretium vivamus eu pharetra pretium ',
      'nisl pulvinar sit luctus commodo fringilla maecenas dapibus netus ornare torquent hendrerit aliquam nostra bibendum etiam gravida libero ',
      'ante gravida vivamus auctor sem aptent class nullam aenean adipiscing purus risus hendrerit hendrerit habitant porttitor molestie eleifend ',
      'lorem rhoncus dui quam lacus nec lacinia aptent dictum feugiat porta condimentum et amet auctor aliquam primis arcu '
    ],
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
