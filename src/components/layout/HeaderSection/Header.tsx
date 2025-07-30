import Logo from "../../common/LogoComponent/Logo"
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header__container}>
      <Logo />
    </header>
    
  )
}

export default Header