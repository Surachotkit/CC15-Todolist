import styles from "./Button.module.scss";

// Button (Obj)
// Button({text,active,type,onClick})
export function Button({ type,onClick, text, active = true }) {
  // ถ้าไม่ส่ง active = true
  let btnStyles = active ? styles.btn__primary : styles.btn__secondary;
  return (
    <button className={`${styles.btn} ${btnStyles}`} 
    type={type}
    onClick={onClick}
    >
      {text}
    </button>
  ); // active -> true btnStyles == styles.btn__primary || fasle === styles.btn__secondary
}
