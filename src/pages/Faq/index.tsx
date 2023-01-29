import { useState } from "react";

import styles from "./style.module.scss";

type FaqType = {
  author: string;
  text: string;
};

type FaqProps = {
    name: string;
    age: number;
    id: number;
}

const Faq = ({name,age, id}:FaqProps ) => {
  const faqs: FaqType[] = [
    {
      author: name,
      text: "How are you",
    },
    {
      author: "dima",
      text: "Where are you",
    },
    {
      author: "Sam",
      text: "What is your name",
    },
  ];


  const [faqsArrou, setFaqsArrou] = useState(faqs);
  const [authorValue, setAuthorValue] = useState("");
  const [textValue, setTextValue] = useState("");


  const pushFaqinFaqs = () => {
    const faqsCopy = [...faqsArrou];

    faqsCopy.push({
      author: authorValue,
      text: textValue,
    });
    setFaqsArrou(faqsCopy);
  };

  const handleAuthorInput = (event: any) => {
    setAuthorValue (event.currentTarget.value)
  };


  const handleTextInput = (event: any) => {
    setTextValue (event.currentTarget.value)
  };


  console.log(authorValue)
  console.log(textValue)
  return (
    <div>
      <h1>Faqs</h1>
      <div>
        {faqsArrou.map((element, index) => {
          return (
            <div key={element.author}>
              <h4>author: {element.author}</h4>
              <p>text: {element.text}</p>
            </div>
          );
        })}
      </div>
      <div>
        <h5>Author</h5>
        <input onChange={handleAuthorInput} />
        <h5>Text</h5>
        <input onChange={handleTextInput} />
        <button onClick={pushFaqinFaqs}>addFaq</button>
      </div>
    </div>
  );
};

export default Faq;
