import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GitHubSection } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem
      nulla, voluptas beatae nam quam explicabo consequuntur possimus labore
      quaerat! Tempora laudantium perspiciatis repellat praesentium
      exercitationem optio nobis corporis similique.
    </Paragrafo>
    <GitHubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=ViniciusLima115&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ViniciusLima115&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSection>
  </section>
)

export default Sobre
