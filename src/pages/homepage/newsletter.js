import React from 'react'
import { SectionTitle, SectionSuperTitle } from 'components/typography'
import { Container } from 'components'
import NewsletterForm from 'components/newsletter-form'
import s from './newsletter.scss'

export default () => (
  <section className={s.section}>
    <Container>
      <div className={s.layout}>
        <div className={s.heading}>
          <SectionTitle className={s.section_title}>Stay in touch</SectionTitle>
          <p className={s.blurb}>
            I occasionally send out emails containing research, best practices,
            stories, and insights from the world’s top psychologists, as well as
            my favorite podcasts and blogs. I promise I won’t send you useless
            messages or sell your email address.
          </p>
        </div>
        <NewsletterForm />
      </div>
    </Container>
  </section>
)
