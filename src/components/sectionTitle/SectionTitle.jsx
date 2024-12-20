import React from 'react'
import s from './SectionTitle.module.scss'


const SectionTitle = ({children="soon...",orient="center"}) => {
  return (
    <>
        <h2 style={{textAlign: orient}} className={s.title}>
    {children}
        </h2>
    </>
  )
}

export default SectionTitle