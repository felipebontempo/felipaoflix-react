import React from 'react';
import Menu from './components/Menu'


function App() {
  return (
    <div>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Desta vez quero explorar como eu aprendi inglês e aproveitar pra explicar porque é tão importante inglês na nossa área e também porque NÃO é tão complicado como muita gente pensa. Trabalhoso, sim. Caro ou complicado, não. Uma tangente neste assunto será tocar no que muita gente pensa sobre padrões e o erro nesse pensamento. Fiquem ligados!"}
      />
    </div>
  );
}

export default App;
