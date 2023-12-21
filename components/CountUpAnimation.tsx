import CountUp from 'react-countup'

interface CountUpAnimationProps {
  count: number
}

const CountUpAnimation: React.FC<CountUpAnimationProps> = ({ count }) => {
  return (
    <>
      <CountUp delay={0} end={count} enableScrollSpy>
        {({ countUpRef }) => <span ref={countUpRef} />}
      </CountUp>
      +
    </>
  )
}

export default CountUpAnimation
