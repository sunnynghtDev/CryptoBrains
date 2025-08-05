import Button from "../ButtonComponent/Button"
import styles from './Auth.module.css'

const Auth = () => {
  return (
    <div className={styles.auth__container}>
      <Button title={'Log In'} color={'clear'}/>
      <Button title={'Sign Up'} color={'primary'}/>
    </div>
  )
}

export default Auth