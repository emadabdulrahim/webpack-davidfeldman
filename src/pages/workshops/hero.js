import React from 'react'
import DFButton from 'components/button'
import { SectionTitle, SectionSuperTitle } from 'components/typography'
import { Container } from 'components'
import Link, { IconExternalLink } from 'components/link'
import WorkshopsLink from 'components/workshops-link'
import { Icon } from 'evergreen-ui'
import avatar from 'static/dave-giving-talk-cropped.jpg'
import YouTube from 'react-youtube'
import text from 'content/workshops'
import ContactForm from 'components/contact-form'
import s from './hero.scss'

const VIDEO_ID = {
  video1: 'zrX0Gvasncw',
  video2: '8XWEHYNQtV4',
}

const buttonProps = {
  type: 'button',
  appearance: 'minimal',
}

const PlayIcon = () => (
  <Icon icon="play" marginRight={8} marginTop={3} size={18} />
)

class YoutubeVideos extends React.Component {
  state = { isPlaying: false, videoId: VIDEO_ID.video1 }

  handleClick = e => {
    const { currentTarget } = e

    this.setState(
      state => ({
        ...state,
        videoId: currentTarget.id,
      }),
      () => this.videoRef.internalPlayer.playVideo()
    )
  }

  render() {
    const { videoId, isPlaying } = this.state
    const className = `${s.video_container} ${isPlaying && s.video_playing}`
    const buttonClass1 = `${s.video_button} ${VIDEO_ID.video1 === videoId &&
      isPlaying &&
      s.video_button_on}`
    const buttonClass2 = `${s.video_button} ${VIDEO_ID.video2 === videoId &&
      isPlaying &&
      s.video_button_on}`

    return (
      <div>
        <div className={s.video_buttons_container}>
          <DFButton
            className={buttonClass2}
            id={VIDEO_ID.video2}
            onClick={this.handleClick}
            light
            {...buttonProps}
          >
            <PlayIcon />
            <span>KARA Talk, California</span>
          </DFButton>
          <DFButton
            className={buttonClass1}
            id={VIDEO_ID.video1}
            onClick={this.handleClick}
            light
            {...buttonProps}
          >
            <PlayIcon />
            <span>The Power of Hope, Tel Aviv</span>
          </DFButton>
        </div>

        <div className={className}>
          <YouTube
            videoId={videoId}
            opts={{
              playerVars: {
                modestbranding: 1,
              },
            }}
            className={s.video}
            ref={el => {
              this.videoRef = el
            }}
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            onPlay={() => {
              this.setState({ isPlaying: true })
            }}
          />
        </div>
      </div>
    )
  }
}

export default () => (
  <section className={s.section}>
    <Container>
      <div className={s.layout}>
        <div className={s.heading_container}>
          <SectionSuperTitle className={s.super_title}>
            — Workshops & Speaking
          </SectionSuperTitle>
          <SectionTitle className={s.title}>
            Dr. Feldman is considered one of the world’s top experts in hope and
            positive psychology.
          </SectionTitle>
          <WorkshopsLink link="#contact" />
        </div>
        <figure className={s.avatar}>
          <img src={avatar} alt="dave giving a talk" />
        </figure>
      </div>
      <div className={s.content}>
        <p className={s.blurb_big}>
          Dr. Feldman has given workshops and lectures for audiences in sectors
          including medicine, education, business, and technology, in places as
          diverse as Oxford University, Prague, Buenos Aires, and across the
          United States. He has spoken for organizations including Google,
          Facebook, Kaiser Permanente, and the Department of Veterans Affairs,
          among many others.
        </p>
        <div>
          <p className={s.blurb_big}>
            Dr. Feldman speaks on diverse topics related to how people maintain
            a sense of hope and strive for personal meaning even in the midst of
            adversity. These topics include:
          </p>
          <ul className={s.topics_list}>
            {text.topics.map(topic => (
              <li className={s.list_item} key={topic}>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.video_section}>
        <SectionTitle className={s.section_title}>Featured Talks</SectionTitle>
        <YoutubeVideos />
      </div>
      <div className={s.other_links}>
        <h4 className={s.section_subtitle}>Other Talks</h4>
        <Link
          className={s.small_link}
          href="http://www.msnbc.com/the-cycle/watch/how-to-move-forward-after-trauma-298771011977"
          isExternal
        >
          How to move forward after trauma
          <IconExternalLink transform="translateY(20%)" />
        </Link>
        <ul className={s.other_talks_list}>
          {text.otherTalks.map(talk => (
            <li className={s.other_talk_list_item} key={talk.name}>
              <em>{talk.name}</em> {talk.location}
            </li>
          ))}
        </ul>
      </div>
      <section className={s.contact} id="contact">
        <div className={s.contact_layout}>
          <div className={s.contact_heading}>
            <SectionTitle className={s.section_title}>
              Invite Dr. Feldman
            </SectionTitle>
            <p className={s.section_blurb}>
              Please leave a short message if you’d like me to speak for your
              organization.
            </p>
          </div>
          <ContactForm className={s.form} source="Workshops" theme="light" />
        </div>
      </section>
    </Container>
  </section>
)
