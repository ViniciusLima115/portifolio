import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'
import Sidebar from '.'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-weight: bold;
  background-color: #282a35;
  cursor: pointer;
`

export const SidebarContainer = styled.aside`
  position: sticky;
  top: 80px;
  position: 0;
`
