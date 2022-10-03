const Title = (props) => (

    <h1>{props.children}</h1>
  )


export const App = () => {
  return (
    <div className="app">
      <Title> Olá Mundo </Title>
    </div>)
}
