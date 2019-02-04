import React from 'react'
import { LinkExternal } from 'components/link'
import { SectionTitle, SectionSuperTitle } from 'components/typography'
import { Container } from 'components'
import researchPapers from 'content/research'
import ContactForm from 'components/contact-form'
import s from './main.scss'

const Paragraph = ({ children }) => <p className={s.blurb}>{children}</p>

const ResearchPaper = ({ author, name, journal, link }) => (
  <LinkExternal className={s.research_paper} href={link}>
    <li>
      <div className={s.paper_name}>{name}</div>
      <div className={s.paper_journal}>{journal}</div>
      <div className={s.paper_author}>— {author}</div>
    </li>
  </LinkExternal>
)

export default () => (
  <>
    <section>
      <div className={s.hero}>
        <Container>
          <SectionSuperTitle>— Research</SectionSuperTitle>
          <SectionTitle className={s.section_title}>
            In all of my work, I have sought to understand and discover way to
            maximize the human capacity for resilience and growth in the face of
            traumas, setbacks, and losses.
          </SectionTitle>
        </Container>
      </div>
      <Container>
        <div className={s.section_body}>
          <Paragraph>
            Most of my work centers on the construct of hope. My work has shown
            that high-hope people have a greater likelihood of achieving their
            goals, lower levels of depression and anxiety, and richer sense of
            life meaning than their low-hope counterparts.
          </Paragraph>
          <Paragraph>
            At no point is hope more important, however, than when people
            confront serious illnesses and traumas. Hope for cure helps motivate
            and inspire people to endure sometimes difficult but necessary
            medical treatments. Thus, hope may literally save lives.
          </Paragraph>
          <Paragraph>
            But the importance of hope doesn’t stop there. Terminally ill
            patients often appear to discover new hopes as their lives draw to a
            close--to make amends with estranged loved ones, become closer to
            God, or simply to see the beach one last time, among many others.
          </Paragraph>
          <Paragraph>
            This potential blossoming of hope in the face of serious adversity
            moves and fascinates me. It was the basis of my book,{' '}
            <em>
              Supersurvivors: The Surprising Link Between Suffering and Success,
            </em>{' '}
            which addresses the importance of hope in helping people to grow and
            thrive despite encountering a variety of traumas, including
            life-threatening illness.
          </Paragraph>
          <Paragraph>
            As the culmination of this work, I have been involved in developing
            Hope Therapy, a set of techniques designed to nurture people’s
            strengths for achieving goals and facing life stressors. My
            colleagues and I have provided empirical evidence of Hope Therapy’s
            efficacy in various populations, including adults with a variety of
            psychopathologies as well as college students both in the United
            States and abroad.
          </Paragraph>
          <Paragraph>
            This therapy has been used in research or clinical practice in
            places such as UCLA, CSU Fresno, University of Central Florida,
            University of Alabama, Sinclair College in Ohio, the College of Lake
            County in Chicago, and the Peres Academic Center in central Israel.
          </Paragraph>
        </div>
      </Container>
    </section>
    <section className={s.research}>
      <div className={s.research_content}>
        <div className={s.papers_heading}>
          <SectionTitle className={s.section_title}>
            Recent Research Publications
          </SectionTitle>
        </div>
        <ul className={s.research_papers}>
          {researchPapers.map(paper => (
            <ResearchPaper key={paper.name} {...paper} />
          ))}
        </ul>
      </div>
    </section>
    <section className={s.contact}>
      <div className={s.contact_heading}>
        <SectionTitle>Say Hello</SectionTitle>
        <Paragraph className={s.contact_blurb}>
          If you’d like to ask me a question or collaborate with me please leave
          a message.
        </Paragraph>
      </div>
      <ContactForm className={s.form} source="Research" theme="dark" />
    </section>
  </>
)
