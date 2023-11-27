import styled from 'styled-components'
type BotaoProps = {
  principal: boolean
}
const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  margin-right: 15px;
`

function Teste() {
  return (
    <>
      <Botao principal>Clique Aqui</Botao>
      <Botao principal={false}>Clique</Botao>
    </>
  )
}
export default Teste
