'use client';

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  PropsWithChildren,
  ReactElement,
} from 'react';
import clsx from 'clsx';

type Props = {} & PropsWithChildren;

const CarousalTestimonial = ({ children }: Props) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [element, setElement] = useState<Element | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const scrollPort = scrollerRef.current;
    if (scrollPort) {
      const element = scrollPort.firstElementChild;
      setElement(element);
    }
  }, []);

 

  const moveToIndex = useCallback((index: number) => {
    const scrollport = scrollerRef.current;
    setIndex(index);
    if (scrollport) {
      const element = scrollport.children[index];

      const delta = Math.abs(scrollport.offsetLeft - element.offsetLeft);
      const scrollerPadding = parseInt(
        getComputedStyle(scrollport)['padding-left'],
      );

      const pos =
        scrollport.clientWidth / 2 > delta
          ? delta - scrollerPadding
          : delta + scrollerPadding;

      scrollport.scrollTo({
        left: pos,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <div className="carousal">
      <ul ref={scrollerRef} className="carousal__scroller px-0">
        {React.Children.map(children, (child) => {
          const item = child as ReactElement<PropsWithChildren<any>>;
          const { style, ...props } = item.props;
          return (
            <li className="carousal__items " style={style}>
              {React.cloneElement(item, { ...props })}
            </li>
          );
        })}
      </ul>

      <div className=" col-span-3 mx-auto flex w-full ">
        <div className="  mx-auto  flex w-full items-center justify-center gap-3">
          {React.Children.map(children, (child, i) => {
            return (
              <div
                onClick={() => moveToIndex(i)}
                className={clsx('h-2 w-2 rounded-full bg-secondary1 ', {
                  'bg-primary duration-200': i === index,
                })}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarousalTestimonial;
