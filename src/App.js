import React from "react";
import twitter from './twttw.png';
import whatsapp from './whatsapp.webp';
import './App.css';

function App() {
    const quotes = [
        ["The art of medicine consists of amusing the patient while nature cures the disease.", "Voltaire"],
        ["Let us be the ones who say we do not accept that a child dies every three seconds simply because he does not have the drugs you and I have. Let us be the ones to say we are not satisfied that your place of birth determines your right for life. Let us be outraged, let us be loud, let us be bold.", "Brad Pitt"],
        ["In my opinion, our health care system has failed when a doctor fails to treat an illness that is treatable.", "Kevin Alan Lee"],
        ["Everyone should have health insurance? I say everyone should have health care. I'm not selling insurance.", "Dennis Kucinich"],
        ["It is hard to talk about a middle ground for something that is a fundamental right.","Teri Reynolds"],
        ["There is no illness that is not exacerbated by stress.","Allan Lokos"],
        ["The road to health is paved with good intestines!", "Sherry A. Rogers"],
        ["I've been asked a lot for my view on American health care. Well, 'it would be a good idea,' to quote Gandhi.", "Paul Farmer"],
        ["When contemplated in its extreme, almost any power looks dangerous.", "Ruth Bader Ginsburg"],
        ["Proximity to power has an unsurprising ability to mutate a politician's spinal cord into bright yellow jelly.","Tariq Ali"],
        ["The health care bill is nothing about health care- it's about controlling the people.", "David Lincoln"]
    ];
  const [quote, setQuote] = React.useState(quotes[Math.floor(Math.random()*quotes.length)])
  const [thisColor, setThisColor] = React.useState("#123456")

  function newQuote() {

       setQuote(quotes[Math.floor(Math.random()*quotes.length)]);
       setThisColor("#"+Math.floor(Math.random()*16777215).toString(16))
       console.log(thisColor);
   };

   

  
 
  return (
    <div className="App">
      <div className="App-header" style={{backgroundColor: thisColor, transition: "all .5s ease"}}>
        <main id="quote-box" style={{backgroundColor: "#ffffff"}}>
        <p className="quote" id="text" style={{color: thisColor}}>{quote[0]}</p>
        <p className="author" id="author" style={{color: thisColor}}>- {quote[1]}</p>
        <div className="panel">
          
          <a href="http://twitter.com/intent/tweet" id="tweet-quote"><img src={twitter} width="40px" height="40px"/></a>
          <a href="/" className="share-quote"><img src={whatsapp} width="40px" height="40px"/></a>
          <button 
            id="new-quote" 
            onClick={newQuote} 
            style={{backgroundColor: thisColor, transition: "all 2s ease"}}
            >Next Quote</button>
        </div>
        </main>
      </div>
    </div>
  );
}

export default App;