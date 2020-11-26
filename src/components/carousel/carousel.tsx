import * as React from 'react';
import st from './carousel.module.scss';
import { DVClass } from '../../utils/index';

const {
  useState,
  memo,
  useEffect,
} = React;

type IProps = {
  children: React.ReactElement[];
};
function Carousel({ children }: IProps) {
  const [ act, setAct ] = useState<number>(0);
  const bannerLen = children?.length;
  let t: ReturnType<typeof setTimeout>;
  useEffect(() => {
    move();
    return () => {
      clearInterval(t);
    };
  }, [ act ]);

  function move() {
    clearInterval(t);
    t = setInterval(() => {
      setAct(act + 1 >= bannerLen ? 0 : act + 1);
    }, 3000);
  }
  return (
    bannerLen ?
      <div className={ st.carousel }>
        <div className={ st.container }
          style={ {
            width: 100 * bannerLen + '%',
            transform: `translateX(-${100 * act}vw)`,
          } }
        >
          {
            children.filter(t => t.type === 'div')
          }
        </div>
        <div className={ st.dot }>
          {
            children.map((t, i) => <div
              key={ t.key }
              onClick={ _ => setAct(i) }
              className={ DVClass(st.item, act === i ? st.active : '') }
            ></div>)
          }
        </div>
      </div> : <></>
  );
}

export default memo(Carousel);