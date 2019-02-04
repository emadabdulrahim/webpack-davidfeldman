import React from 'react'
import { SectionTitle, SectionSuperTitle } from 'components/typography'
import { Pane } from 'evergreen-ui'
import { Feed } from '../homepage/blog'
import s from './main.scss'
import './soundcloud.scss'

export default () => (
  <>
    <section className={s.section}>
      <div className={s.heading}>
        <SectionSuperTitle>— blog & podcast</SectionSuperTitle>
        <SectionTitle className={s.section_title}>
          Learn something new about psychology while you sip your morning
          coffee.
        </SectionTitle>
      </div>
    </section>
    <div className={s.content_section}>
      <div className={s.content_layout}>
        <Pane>
          <SectionSuperTitle className={s.super_title}>Blog</SectionSuperTitle>
          <div className={s.feed}>
            <ul className={s.feed_wrapper}>
              <Feed limit={-1} />
            </ul>
          </div>
        </Pane>
        <div className={s.podcast_container}>
          <Pane>
            <SectionSuperTitle className={s.super_title}>
              Podcast
            </SectionSuperTitle>
            <iframe
              title="Psychology in 10 Minutes"
              width="500"
              height="545"
              scrolling="no"
              frameBorder="yes"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/308292267&color=%23a25719&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            />
          </Pane>
        </div>
      </div>
    </div>
  </>
)
