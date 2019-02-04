require('dotenv').config()
const express = require('express')
const path = require('path')
const Parser = require('rss-parser')
const Mailchimp = require('mailchimp-api-v3')
const mcache = require('memory-cache')
const sgMail = require('@sendgrid/mail')

const cache = duration => {
  return (req, res, next) => {
    const key = `_express_${req.originalUrl}` || req.originalUrl
    const cachedBody = mcache.get(key)
    if (cachedBody) {
      console.log('entered chache')
      res.send(cachedBody)
      return
    } else {
      res.sendResponse = res.send
      res.send = body => {
        mcache.put(key, body, duration * 1000)
        // console.log('saving cache', mcache.get(key))
        res.sendResponse(body)
      }
    }
    next()
  }
}

const { LIST_ID } = process.env
const { API_KEY } = process.env
const { SENDGRID_API_KEY } = process.env

const mailchimp = new Mailchimp(API_KEY)

const port = 8080
const app = express()
const parser = new Parser()
sgMail.setApiKey(SENDGRID_API_KEY)
// const dev = process.env.NODE_ENV !== 'production'

app.use(express.static('dist'))
app.use(express.json())

app.get('/api/blog', cache(10000), (req, res) => {
  console.log('blog api')
  const fetchFeed = async () => {
    try {
      const feed = await parser.parseURL(
        'https://www.psychologytoday.com/blog/supersurvivors/feed'
      )
      res.send(JSON.stringify(feed))
    } catch (error) {
      console.log('blog error: ', error)
    }
  }

  fetchFeed()
})

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body

  if (!email || email === '') {
    res.json({ error: 'Email is required' })
    return
  }

  mailchimp
    .post(`/lists/${LIST_ID}/members`, {
      email_address: email,
      status: 'subscribed',
    })
    .then(results => res.json(results))
    .catch(err => {
      console.log('error: ', err)
      res.json(err)
    })
})

app.post('/api/contact', (req, res) => {
  const { email, fullName, message, source } = req.body

  console.log('contact info: ', typeof email, typeof fullName, typeof message)

  const msg = {
    to: 'emad90mohamad@gmail.com',
    from: email,
    subject: `New ${source} request from ${fullName}`,
    text: message,
    html: message,
  }
  sgMail.send(msg)

  res.json({ message: 'all goodsss' })
})

app.get('/*', (_, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
)

module.exports = app
