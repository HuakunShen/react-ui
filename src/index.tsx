import * as React from 'react'
import styles from './styles.module.css'
import WelcomeComponent from './components/WelcomeComponent'

interface Props {
  text: string
}

export const Welcome = ({ text }: Props) => {
  return <WelcomeComponent className={styles.welcome} text={text} />
}
