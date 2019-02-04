import React from 'react'
import { Icon } from 'evergreen-ui'
import { Link } from 'react-router-dom'
import { LinkExternal } from 'components/link'
import Resume from 'static/pdf/feldman-cv.pdf'
import DFButton from 'components/button'
import { Container } from 'components'
import s from './bio.scss'

const CTA = () => (
  <div className={s.cta}>
    <div className={s.button_group}>
      <LinkExternal href={Resume} isExternal>
        <DFButton className={s.button_outline} large>
          <Icon
            className={s.cv_icon}
            size={16}
            icon="document-open"
            marginTop={2}
          />
          <span className={s.button_text}>Dr. Feldman’s CV</span>
        </DFButton>
      </LinkExternal>
      <Link to="/workshops">
        <DFButton className={s.button_outline} large>
          <Icon
            className={s.cv_icon}
            size={16}
            icon="chevron-right"
            marginTop={4}
          />
          <span className={s.button_text}>Invite Dr. Feldman</span>
        </DFButton>
      </Link>
    </div>
  </div>
)

export default () => (
  <section>
    <Container className={s.section}>
      <div className={s.content_container}>
        <div className={s.content}>
          <p className={s.blurb_big}>
            David B. Feldman, PhD, is considered to be one of the top experts on
            hope in the field of psychology.
          </p>
          <p className={s.blurb}>
            Professor and Chairperson of the Department of Counseling Psychology
            at Santa Clara University, his research and writings have addressed
            such topics as hope, meaning, and growth in the face of setbacks,
            losses, serious medical illness, trauma, and other highly stressful
            circumstances.
          </p>
          <p className={s.blurb}>
            He has authored three books, including{' '}
            <em>
              Supersurvivors: The Surprising Link Between Suffering & Success{' '}
            </em>
            (HarperCollins),{' '}
            <em>
              Public Speaking for Psychologists: A Lighthearted Guide to
              Research Presentations, Job Talks, and Other Opportunities to
              Embarrass Yourself{' '}
            </em>
            (American Psychological Association), and{' '}
            <em>
              The End-of-Life Handbook: A Compassionate Guide to Connecting with
              and Caring for a Dying Loved One{' '}
            </em>
            (New Harbinger).
          </p>
          <p className={s.blurb}>
            Dr. Feldman has given hundreds of lectures for audiences in sectors
            including medicine, education, business, and technology, speaking
            for Google, Facebook, Kaiser Permanente, and the Department of
            Veterans Affairs, among others, and his research has been published
            in top academic journals. In addition, he has appeared in such
            magazines as{' '}
            <em>
              SELF, People, ‘O’: The Oprah Magazine, U.S. News & World Report,
            </em>{' '}
            and <em>Harvard Business Review, </em>
            has been interviewed on NPR, MSNBC, and the Oprah Winfrey Network,
            and writes regularly for Psychology Today. He is the host of the
            ‘Psychology in 10 Minutes’ podcast, and regularly guest-hosts ‘About
            Health’ on KPFA Radio in the San Francisco Bay Area.
          </p>
        </div>

        <CTA />
      </div>
    </Container>
  </section>
)
