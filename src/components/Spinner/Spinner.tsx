import React from "react"
import styles from "./Spinner.module.css"

const Spinner = () => {
  return (
    <div
      aria-label="loading"
      className={`!block mx-auto lds-ring w-min ${styles["lds-ring"]}`}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Spinner
