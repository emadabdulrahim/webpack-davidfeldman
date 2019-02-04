import React from 'react'
import Arrow from './arrow-right'
import { SectionTitle, SectionSuperTitle } from 'components/typography'
import { Container } from 'components'
import { Link } from 'react-router-dom'
import DFButton from 'components/button'
import AppContext from '../../context'
import s from './blog.scss'

const Post = ({ title, content, date, link }) => (
  <li className={s.post_container}>
    <div className={s.post_content}>
      <a
        href={link}
        className={s.post_title_link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <time className={s.post_date}>
          <span>{date[0]}&nbsp;</span>
          <span className={s.muted}>{date[1]}</span>
        </time>
        <h4 className={s.post_title}>{title}</h4>
      </a>
      <p className={s.post_blurb}>{content}</p>
      <a
        className={s.post_link}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        read
      </a>
    </div>
  </li>
)

export const Feed = ({ limit }) => (
  <AppContext.Consumer>
    {({ feed, isFetching }) => (
      <>
        {feed &&
          feed.slice(0, limit).map(post => <Post key={post.link} {...post} />)}
      </>
    )}
  </AppContext.Consumer>
)

export default () => (
  <section className={s.section}>
    <Container>
      <div className={s.heading_container}>
        <Link to="/psychologyin10minutes">
          <SectionSuperTitle>
            psychology in 10 minutes podcast & blog
          </SectionSuperTitle>
          <SectionTitle>
            Useful bite-sized psychology <br />
            <span className={s.muted}>while you sip your morning coffee</span>
          </SectionTitle>
        </Link>
        <p className={s.blurb}>
          We all yearn to know more about ourselves and better understand the
          thoughts, feelings, and behaviors of the people we care about.
        </p>
      </div>
    </Container>
    <Container>
      <ul className={s.feed_wrapper}>
        <Feed limit={4} />
      </ul>
    </Container>
    <Link to="/psychologyin10minutes">
      <DFButton className={s.link_big} large>
        <span className={s.link_with_arrow}>All Posts</span>
        <div className={s.arrow_container}>
          <Arrow className={s.arrow} />
        </div>
      </DFButton>
    </Link>
  </section>
)
