//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3- )Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.

//?Harici stillendirme dosyasi
import "./Content.css";

// ? Dahili bir resim eklemek icin import yapmak gereklidir.
import img2 from "../img/spring2.jpg";

const Content = () => {
  //* JS alanı
  const imgStyle = {
    display: "block",
    width:"300px",
    margin: "1rem"
  }
  };
  return (
    //* JSX alanı
    <div>
      {/* Inline Style */}
      <h2 style={{color:"red"}}>React JS</h2>
      <p style={{backgroundColor: "lightgreen"}}>
        React, Kullanici arabirimi tasarlamak icin kullanilan bir JS
        kütüphanesidir.
      </p>
      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg"
        alt="img1"
      />
      <img src={img2} alt="img2" />
      <p className="par-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur culpa nulla non placeat quas, nihil harum quia exercitationem asperiores nemo debitis officia beatae deleniti inventore vitae id atque. Magni, dolorem?
      </p>
    </div>
  );
};

export default Content;
