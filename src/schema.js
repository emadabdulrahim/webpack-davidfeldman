import { map } from 'lodash'

const MONTHS = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sept',
  'oct',
  'nov',
  'dec',
]

const formatDate = date => {
  const dateObj = new Date(date)
  const monthIndex = dateObj.getMonth()
  const day = dateObj.getDate()
  const year = dateObj.getFullYear()

  return [`${MONTHS[monthIndex]} ${day},`, ` ${year}`]
}

const getCategory = categories => map(categories, each => each._)

const schema = data =>
  map(data.items, each => ({
    ...each,
    date: formatDate(each.isoDate),
    categories: getCategory(each.categories).slice(0, 3),
  }))

export default schema
