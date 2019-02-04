import React from 'react'
import { SectionTitle, SectionSuperTitle } from 'components/typography'
import { Container } from 'components'
import avatar from 'static/about-profile.jpg'
import s from './hero.scss'

export default () => (
  <section className={s.section}>
    <Container>
      <div className={s.layout}>
        <div className={s.content}>
          <SectionSuperTitle className={s.page_title}>
            — About
          </SectionSuperTitle>
          <SectionTitle className={s.heading}>
            I am fascinated by the human capacity for resilience and growth in
            the face of adversity.
          </SectionTitle>
        </div>
        <figure className={s.avatar}>
          <img src={avatar} alt="headshot" />
        </figure>
      </div>
    </Container>
  </section>
)
