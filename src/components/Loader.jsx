import {Html ,useProgress} from '@react-three/drei'


const Loader = () => {
  const {progress} = useProgress();

  return (
    <Html>
      <span className='canvas-load'>
        <p
        style={{
          fontsize:14,
          color:'#f1f1f1',
        }}
        >{progress.toFixed(2)}%</p>
      </span>
    </Html>
  )
}

export default Loader