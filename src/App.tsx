import React from "react";
import "./App.css";
import Carousel from './components/carousel/carousel';

type banners = {
  img: string,
  href?: string,
  alt?: string,
};
const bannners: banners[] = [
  {
    img: require('./assets/carousel1.png'),
    href: 'https://www.baidu.com'
  },
  {
    img: require('./assets/carousel2.png'),
    href: 'https://www.sina.com'
  },
  {
    img: require('./assets/carousel3.png'),
    href: 'https://www.qq.com'
  },
];

function App() {
  return <div className="App">{/* write your component here */ }
    <Carousel>
      {
        bannners.map((it) =>
        <div
          key={ it.img }
        >
          <img
            src={ it.img }
            alt={it.alt || '' }
          />
        </div>
        )
      }
    </Carousel>
  </div>;
}

export default App;
