/* 
ForwardRef giver os mulighed for at passe en reference fra det ene komponent til det andet.
*/
import { forwardRef } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../button/Button";
import styles from "./modal.module.css";

const Modal = forwardRef(function Modal({ email }, ref) {
  return (
    /* Dialog er som default usynlig */
    <dialog ref={ref} className={styles.modal}>
      <h2>Du er nu tilmeldt nyhedsbrevet med emailen: {email}</h2>
      {/* method 'dialog' er støttet i morderne browsere. Hvis den er lavet i et dialog-tag, 
      er det muligt at oprette en 'luk'-knap uden nogle former for events */}
      <form method='dialog'>
        <Button title={<IoMdClose size={20} />} />
        {/* <button>Luk</button> */}
      </form>
    </dialog>
  );
});

export default Modal;
