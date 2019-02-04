import React from 'react'
import { Hero, SectionTitle, SectionSuperTitle } from 'components/typography'
import { Container } from 'components'
import Button from 'components/button'
import { Pane } from 'evergreen-ui'

export default () => (
  <Pane>
    <Container>
      <Hero>Style Guide</Hero>
      <Button>Hello</Button>
    </Container>
  </Pane>
)
