import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={18}>Vinicius Lima</Titulo>
      <Paragrafo tipo="secundario" fontSize={14}>
        ViniciusLima115
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Front-End Engineer
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
