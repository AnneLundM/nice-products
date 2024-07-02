import { useState, useRef, useEffect } from "react";
import styles from "./newsletter.module.css";
import Button from "../button/Button";
import Modal from "../modal/Modal";

const Newsletter = () => {
  const [inputValue, setInputValue] = useState("");

  // Opret en reference til input-elementet. Formålet med det er, at interagere med DOM-elementet uden at udløse en re-render af din komponent.
  const inputRef = useRef();
  //  ved at bruge useRef i forbindelse med vores dialog, undgår vi at skulle opdatere og holde styr på state-variabler (open, setOpen)
  const dialog = useRef();

  // Opdaterer state hver gang inputfeltet ændres
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Brug useEffect til at sætte fokus på input-feltet, når komponenten mountes
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Funktionen der håndterer formularindsendelsen
  const handleSubmit = (event) => {
    event.preventDefault(); // Forhindrer formular i at udføre standard submit handling (dette genindlæser siden)
    dialog.current.showModal();
  };
  return (
    <section className='section'>
      <Modal ref={dialog} email={inputValue} />
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Din email: </label>

        <input
          ref={inputRef}
          type='email' //HTML5-validering
          value={inputValue}
          onChange={handleInputChange}
        />

        <Button type='submit' title='Tilmeld' />
      </form>
    </section>
  );
};

export default Newsletter;
