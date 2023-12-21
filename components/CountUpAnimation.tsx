import CountUp from 'react-countup'

interface CountUpAnimationProps {
  end: number;
}

const CountUpAnimation: React.FC<CountUpAnimationProps> = ({ end }) => {
  return (
    <CountUp delay={0} end={end} enableScrollSpy>
      {({ countUpRef }) => <span ref={countUpRef} />}
    </CountUp>
  )
}

export default CountUpAnimation
