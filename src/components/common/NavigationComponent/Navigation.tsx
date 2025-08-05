import { useState } from "react";
import type { NavigationData, NavInterface } from './navigationInterface'
import navData from "./navigationList";
import styles from './Navigation.module.css'


interface NavigationProps {
  data: NavigationData;
}

const Navigation: React.FC<NavigationProps> = ({ data }) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const handleMouseEnter = (id:string) => {
    setActiveSubmenu(id);
  }

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  }

  const renderNavItems = (item: NavInterface) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
  }

  return (
    <nav className={styles.navigation__container}>
      {navData.map((item: NavInterface) => {
        return (
          <a 
            href={item.path} 
            key={item.title}
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={() => handleMouseLeave()}
            >{item.title}</a
          >
          
        )
      })}
    </nav>
  )
}

export default Navigation