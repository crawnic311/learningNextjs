import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'
import styles2 from '../styles/Home.module.css'

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <header class={styles2.header}>
        <nav class={styles.navbar}>
          <Link href="/">
            <a class={styles.navlogo}>foody</a>
          </Link>
          <ul
            class={
              isOpen === false
                ? styles.navmenu
                : styles.navmenu + ' ' + styles.active
            }
          >
            <li class={styles.navitem}>
              <Link href="/">
                <a class={styles.navlink}>Home</a>
              </Link>
            </li>
            <li class={styles.navitem}>
              <Link href="/about">
                <a class={styles.navlink}>About</a>
              </Link>
            </li>
            <li class={styles.navitem}>
              <Link href="/contact">
                <a class={styles.navlink}>Contact</a>
              </Link>
            </li>
          </ul>
          <button
            class={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + ' ' + styles.active
            }
            onClick={openMenu}
          >
            <span class={styles.bar}></span>
            <span class={styles.bar}></span>
            <span class={styles.bar}></span>
          </button>
        </nav>
      </header>
      {children}
      <div className={styles2.container}>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </a>
        </footer>
      </div>
    </>
  )
}
