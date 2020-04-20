import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import { CardPequeno } from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fthe2-1.fna.fbcdn.net/v/t1.0-9/61407896_616319382181818_8229306206997446656_n.jpg?_nc_cat=106&_nc_sid=7aed08&_nc_eui2=AeElVvl9p9WlPd-QFYOmbQd-iyBA4yyH-UyLIEDjLIf5TB6eQRNZ19iGnWcABOY6dug10MzxGLvJQKX5XU_9reHh&_nc_ohc=nrMsoExO5MMAX-SIamt&_nc_ht=scontent.fthe2-1.fna&oh=1a561c09049afedcbb5cc550c56b5f49&oe=5EBAC4BD" 
          nome="Jerry Jones" 
          descricao="Oi, eu sou o Jerry Jones. Sou o aluno da Turma Julian na Labenu. Me amarro em codar e sou Dev Web em formação. O React é lindo, não é?! Pois é. Avante, Julian!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          tipo={"E-mail"}
          imagem={"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png"}
          conteudo={"jerry@turmajulian.com.br"}
        />

        <CardPequeno
          tipo={"Endereço"}
          imagem={"https://image.flaticon.com/icons/svg/1239/1239525.svg"}
          conteudo={"Rua da Passagem 7"}
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://scontent.fthe2-1.fna.fbcdn.net/v/t1.0-9/42205411_263879900904610_6255291769777291264_n.png?_nc_cat=101&_nc_sid=85a577&_nc_eui2=AeGbquGX8F6525KF3Kfp4fcYQ0rslUiXjD9DSuyVSJeMP9Hrnaybqzu7lQvZBeDFF-5lmUnl66MZ5gavmExCH-KA&_nc_ohc=GWGn2BGAptcAX9Kp3qf&_nc_ht=scontent.fthe2-1.fna&oh=28e982917e883b8ec509966500cca00c&oe=5EBA2C16" 
          nome="365.be!" 
          descricao="Estágio Web" 
        />
      </div>

      <div className="page-section-container">
        <h2>Conhecimentos</h2>
        <CardGrande 
          imagem="https://icons.iconarchive.com/icons/iconsmind/outline/512/File-HTML-icon.png" 
          nome="HTML" 
          descricao="Conhecimento Básico" 
        />
        
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlguA4hBFR5PaTB6H-FPTuHyixqPjqxAl0A_gNuLFPg1bxAe0h&usqp=CAU" 
          nome="CSS" 
          descricao="Conhecimento Básico" 
        />

        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQifuIcxjLgdujgDtS9Dwep6hsHtujEu4S4NvOSfcPdcmR-2k-l&usqp=CAU" 
          nome="JavaScript" 
          descricao="Conhecimento Básico" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
