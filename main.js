
import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const App = () => {

  const randomQuotes = [
  {
    quote: "When a bunch of known corrupt people unite against one man and spare no effort to ridicule him, blackmail him and attempt to assassinate his character, follow that one man.",
    author: "Marcus aurelius"
  },
  {
   quote: "Never judge someone's character based on the words of another, instead, study the motives behind the words of the person casting the bad judgment.",
    author: "Suzy Kassem"
  },
  {
    quote: "Source of Character assassination is jealousy; jealousy originates from Limitation, a jealous person sees you as having a gift, skill, charisma, talent, or ability that he or she does not have, the mindset of a jealous person is manipulation.",
    author: "Deborah Bravandt"
  },
  {
    quote: "Sometimes what you love to do could even make many people to hate you, you may go through non-formal torments, character assassinations, verbal assaults and societal rejections, but if you are convinced about your love for what you are doing, you will never give up.",
    author: "Israelmore Ayivor"
  },
  {
    quote: "No one cared when you were doing nothing, if they now criticize, ridicule, and character assassinate you means you are doing something great.",
    author: "Assegid Habtewold"
  },
  {
    quote: "Backstabbers and malicious people are not worth your attention, but you can thank them for deeming you worthy of theirs.",
    author: "J.S. Wolfe"
  },
  {
    quote: "When I despair, I remember that all through history the way of truth and love have always won. There have been tyrants and murderers, and for a time, they can seem invincible, but in the end, they always fall. Think of it--always.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love.",
    author: "Fyodor Dostoevsky"
  },
  {
    quote: "Never be afraid to raise your voice for honesty and truth and compassion against injustice and lying and greed. If people all over the world...would do this, it would change the earth.",
    author: "William Faulkner"
  },
  {
    quote: "Integrity, transparency and the fight against corruption have to be part of the culture. They have to be taught as fundamental values.",
    author: "Angel Gurria"
  }
];

let [randomQuoteInd, setRandomQuoteInd] = React.useState(Math.floor(Math.random() * randomQuotes.length));
  
  const colorStores = ['#264653', '#5e503f', '#272640', '#e63946', '#003e1f', '#283618', '#14213d', '#0d1b2a', '#f694c1', '#00b4d8'];
  
  let [colorStoreInd, setColorStoreInd] = React.useState(Math.floor(Math.random() * colorStores.length));
  
  function handleClick() {
     setColorStoreInd(Math.floor(Math.random() * colorStores.length));
   setRandomQuoteInd(Math.floor(Math.random() * randomQuotes.length));
  }
  
  return (
  <div className= "wrapper" style= {{backgroundColor: colorStores[colorStoreInd]
      }}>
<div id= "quote-box" style= {{color: colorStores[colorStoreInd] }}>
<p id="text"><i className="fas fa-quote-left"></i><br/>         {randomQuotes[randomQuoteInd].quote}</p>
<p id='author'>BY: {randomQuotes[randomQuoteInd].author}</p>
      <br/>
    <br/>
 <div id="clickable">
<a id="tweet-quote" className="btn btn-lg btn-primary" href="twitter.com/intent/tweet" target="_blank" style= {{color: colorStores[colorStoreInd]}} >Tweet Quote</a>
<button id="new-quote" onClick={handleClick} style={{ color: colorStores[colorStoreInd] }}>New Quote</button>  
          </div>
        </div>
      </div>
  )
}

ReactDOM.render(<App/>,document.getElementById("root"));
