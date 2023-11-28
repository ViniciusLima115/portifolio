import styled from 'styled-components'
import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Button, Card } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de Tarefas</Paragrafo>
    <Button>Vizualizar</Button>
  </Card>
)

export default Projeto
