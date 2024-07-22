import { useState } from "react";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {


  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion" >
      {
        faqs.map((faq, i) => (
          <AccordionItems
            curOpen={curOpen}
            onOpen={setCurOpen}
            title={faq.title}
            num={i}
            key={faq.title}>
            {faq.text}
          </AccordionItems>
        ))
      }

    </div>
  )
}

function AccordionItems({ title, num, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;
  function handleOpen(num) {
    onOpen(isOpen ? null : num);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={() => handleOpen(num)}>
      <p className="number">{num < 10 ? `0${num + 1}` : ++num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {
        isOpen ? (<div className="content-box">
          {children}
        </div>) : ""
      }

    </div>
  )
}
