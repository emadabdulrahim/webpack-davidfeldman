import React from 'react'
// import { Link } from 'react-router-dom'
import BookCover1 from 'components/static/supersurvivors-bookcover'
import BookCover2 from 'components/static/end-of-life-bookcover'
import BookCover3 from 'components/static/public-speaking-bookcover'
import { SectionTitle, SectionSuperTitle } from 'components/typography'
import { Container } from 'components'
import { LinkExternal } from 'components/link'
import Book1 from 'static/books/supersurvivors.jpg'
import Book2 from 'static/books/end-of-life.jpg'
import Book3 from 'static/books/public-speaking.jpg'
import text from 'content/books'
import s from './books.scss'

const bookCover = slug => {
  switch (slug) {
    case 'supersurvivors':
      return Book1
    case 'end-of-life-handbook':
      return Book2

    case 'public-speaking-for-psychologists':
      return Book3

    default:
      break
  }

  return null
}

const Book = ({ title, slug, shortDescription, image, cover, link }) => {
  const BookCover = bookCover(slug)

  return (
    <LinkExternal className={s.book_link} href={link}>
      <li className={s.book_wrapper}>
        <div className={s.book_layout}>
          <figure className={s.book_cover}>
            <div>
              <img className={s.book_img} src={BookCover} alt="book cover" />
            </div>
          </figure>
          <div className={s.book_content}>
            <h4 className={s.book_title}>{title}</h4>
            <p className={s.book_blurb}>{shortDescription}</p>
          </div>
        </div>
      </li>
    </LinkExternal>
  )
}

export default () => (
  <section className={s.section} id="books">
    <Container>
      <div className={s.heading_container}>
        <SectionSuperTitle>Books</SectionSuperTitle>
        <SectionTitle>Published Books</SectionTitle>
      </div>
    </Container>
    <div className={s.books_container}>
      <ul className={s.books_layout}>
        {text.map(book => (
          <Book {...book} key={book.title} />
        ))}
      </ul>
    </div>
  </section>
)
