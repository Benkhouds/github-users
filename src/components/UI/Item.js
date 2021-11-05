import React from 'react'


const Item = ({icon, color, label ,value}) => {
 return (
  <article  className="item">
  <span className={color}>{icon}</span>
  <div>
     <h3>{value}</h3>
     <p>{label}</p>
  </div>
</article>
 )
}

export default Item

