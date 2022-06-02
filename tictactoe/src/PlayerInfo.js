import React from 'react'

export default function PlayerInfo(props) {
  const element = props.winner ? <h1>Winner:{props.winner}</h1> : <h2>Turn:{props.turn}</h2>
  return element;
}
