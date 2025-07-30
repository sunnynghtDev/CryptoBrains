import logo from '../../../assets/images/logo.svg'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <a href='/' className={styles.logo__container}>
      <img src={logo} alt="CryptoBrains Home Page" />
    </a>
  )
}

export default Logo