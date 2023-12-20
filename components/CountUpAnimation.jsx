import CountUp from 'react-countup';

function CountUpAnimation({ end }) {
  return (
    <>
      <CountUp delay={0} end={end}  enableScrollSpy>
      {({ countUpRef }) => (
    
      <span ref={countUpRef} />
   
  )}  
      </CountUp>
      +
    </>
  );
}

export default CountUpAnimation;