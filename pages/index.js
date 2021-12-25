import React from 'react'
import Image from 'next/image'
import RecipeList from '../component/recipelist'
import RecipeNav from '../component/recipenav'
import styles from '../styles/Home.module.css'

export default function () {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <RecipeList />
        </div>
        <div className={styles.container}>
          <RecipeNav />
        </div>
      </main>
    </div>
  )
}
