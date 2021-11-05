
import React from 'react'

const FollowerItem = ({avatar_url, login, html_url}) => {
    console.log(avatar_url)
 return (
  <article>
     <img src={avatar_url} alt={login} />
     <div>
         <h4>{login}</h4>
         <a href={html_url}>{html_url}</a>
     </div>
  </article>
 )
}

export default FollowerItem
