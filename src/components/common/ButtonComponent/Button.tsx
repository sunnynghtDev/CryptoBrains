import styles from './Button.module.css'

interface ButtonProps {
  title: string,
  color: string,
}

const Button = ({title, color}: ButtonProps) => {

  return (
    <button className={`${styles.button} ${styles[color]}`}>{title}</button>
  )
}

export default Button