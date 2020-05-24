import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  const [contents, setcontents] = useState([])

  useEffect(() => {
    fetchcontents()
  }, [])

  const fetchcontents = async () => {
    const data = await window.fetch('https://yokmedios.com/api/v2/web/contents/?category_id=3%2C6%2C20&limit=12&offset=0&section=news&app_id=5&', {
      headers: {
        'X-API-KEY': '000gc0g8sw08wc0scwgg8gcs44ogk0oswc0kc84g'
      }
    })
    const contents = await data.json()
    setcontents(contents.data.contents)
  }

  if (contents.length === 0) {
    return <h1>Loading</h1>
  } else {
    return (
      <>
        <h1>Blog</h1>
        <section>
          {contents.map(content => {
            return (
              <h2 key={content.id}>
                <Link to={'/read/' + content.id}>{content.title}</Link>
              </h2>
            )
          })}
        </section>
      </>
    )
  }
}

export default Blog
