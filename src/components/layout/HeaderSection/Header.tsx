import Auth from "../../common/AuthComponent/Auth"
import Logo from "../../common/LogoComponent/Logo"
import Navigation from "../../common/NavigationComponent/Navigation"
import VerticalLine from "../../common/VerticalLineComponent/VerticalLine"
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header__container}>
      <section className={styles.container__logo}>
        <Logo />
        <VerticalLine/>
      </section>
      <Navigation data={[]}/>
      <Auth/>
    </header>
    
  )
}

export default Header