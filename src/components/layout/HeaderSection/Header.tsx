import Auth from "../../common/AuthComponent/Auth"
import Logo from "../../common/LogoComponent/Logo"
import Navigation from "../../common/NavigationComponent/Navigation"
import VerticalLine from "../../common/VerticalLineComponent/VerticalLine"
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.header__container}>
        <div className={styles.container__logo}>
        <Logo />
        <VerticalLine/>
        </div>
        <Navigation data={[]}/>
        <Auth/>
      </section>
    </header>
    
  )
}

export default Header