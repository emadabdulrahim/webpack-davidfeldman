import React from 'react'
import { Pane } from 'evergreen-ui'
import { Link } from 'react-router-dom'
import { SectionTitle, SectionSuperTitle } from 'components/typography'
import { Container, Section } from 'components'
import avatar from 'static/dave-giving-talk-cropped.jpg'
import WorkshopsLink from 'components/workshops-link'
import s from './workshops.scss'

export default () => (
  <Section className={s.section}>
    <Container>
      <div className={s.layout}>
        <figure className={s.avatar}>
          <img src={avatar} alt="dave giving a talk" />
        </figure>
        <div className={s.heading_container}>
          <Link to="/workshops">
            <SectionSuperTitle className={s.super_title}>
              Workshops and speaking
            </SectionSuperTitle>
            <SectionTitle className={s.section_title}>
              Build resilience and inspire hope
              <br className={s.section_title_br} />
              in your teams and organizations
            </SectionTitle>
          </Link>
          <Pane display="flex" justifyContent="flex-end">
            <WorkshopsLink className={s.link} link="/workshops#contact" />
          </Pane>
        </div>
      </div>
    </Container>
  </Section>
)
