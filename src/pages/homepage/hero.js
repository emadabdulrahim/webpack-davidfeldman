import React from 'react'
import { Hero, SectionBlurb } from 'components/typography'
import { Container, Section } from 'components'
import avatar from 'static/profile.jpg'
import s from './hero.scss'

export default () => (
  <Section className={s.section}>
    <Container>
      <div className={s.profile_wrapper}>
        <figure className={s.avatar}>
          <img src={avatar} alt="headshot" />
        </figure>
        <div>
          <div className={s.profile_content}>
            <h4 className={s.name}>David B. Feldman PhD</h4>
            <Hero className={s.title}>Author. Professor. Speaker.</Hero>
          </div>
          <SectionBlurb className={s.intro_blurb}>
            David B. Feldman, PhD is a professor, author, speaker, host of the
            ‘Psychology in 10 Minutes’ podcast, and occasional host of ‘About
            Health’ on KPFA Radio in Berkeley, California. His research on how
            people maintain hope and meaning in the face or trauma, loss, and
            setbacks has been published in top academic journals and featured in
            major media outlets. Chair of the Department of Counseling
            Psychology at Santa Clara University, Dr. Feldman has published
            three books, lectured for organizations around the world, appeared
            on national television and radio, and writes regularly for
            <em>&nbsp;Psychology Today.</em>
          </SectionBlurb>
        </div>
      </div>
    </Container>
  </Section>
)
