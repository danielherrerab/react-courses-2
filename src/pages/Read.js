import React, { useState, useEffect } from 'react'

const Read = ({ match }) => {
  const [content, setContent] = useState(null)
  useEffect(() => {
    const fetchContent = async () => {
      const data = await window.fetch('https://yokmedios.com/api/v2/web/contents/?id=' + match.params.id + '&app_id=5&', {
        headers: {
          'X-API-KEY': '000gc0g8sw08wc0scwgg8gcs44ogk0oswc0kc84g'
        }
      })
      const content = await data.json()
      setContent(content.data.content)
      console.info(content.data.content)
    }
    fetchContent()
  }, [match.params.id])

  if (content === null) {
    return (<h1>Loading</h1>)
  } else {
    return (
      <article>
        <h1>{content.header.title}</h1>
        <p>{content.header.intro}</p>
      </article>
    )
  }
}

export default Read
