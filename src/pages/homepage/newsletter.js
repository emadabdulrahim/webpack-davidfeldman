import React from 'react'
import { SectionTitle } from 'components/typography'
import { Container, Section } from 'components'
import { TextInput, Icon } from 'evergreen-ui'
import NewsletterContainer, {
  NewsletterContext,
} from 'components/newsletter-form'
import DFButton from 'components/button'
import s from './newsletter.scss'

const NewsletterForm = () => (
  <NewsletterContext.Consumer>
    {({ email, actions }) => (
      <form className={s.form} onSubmit={actions.subscribe}>
        <div className={s.input_group}>
          <Icon icon="envelope" className={s.input_icon} size={20} />
          <TextInput
            required
            placeholder="Your email here"
            onChange={actions.handleInputChange}
            value={email}
            marginBottom={0}
          />
        </div>
        <DFButton className={s.button} large type="submit">
          Subscribe
        </DFButton>
      </form>
    )}
  </NewsletterContext.Consumer>
)

export default () => (
  <Section className={s.section}>
    <Container>
      <NewsletterContainer>
        <div className={s.layout}>
          <div className={s.heading}>
            <SectionTitle className={s.section_title}>
              Stay in touch
            </SectionTitle>
            <p className={s.blurb}>
              I occasionally send out emails containing research, best
              practices, stories, and insights from the world’s top
              psychologists, as well as my favorite podcasts and blogs. I
              promise I won’t send you useless messages or sell your email
              address.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </NewsletterContainer>
    </Container>
  </Section>
)
