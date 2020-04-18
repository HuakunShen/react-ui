import React from 'react'
interface Props {
  className: string
  text: string
}
const WelcomeComponent = (props: Props) => {
  const { className, text } = props
  return (
    <div className={`${className} container mt-5`}>
      <h1>{text}</h1>
      <h2>Welcome to Huakun's React Component Library</h2>
    </div>
  )
}

export default WelcomeComponent
