import Image from 'next/image'
import Login from '@/components/login'
import Control from '@/components/control'

export default function Home() {
  return (
    //Fix commit message
    <>
      <div className="max-w-container">
        {/* <Login></Login> */}
        <Control></Control>
      </div> 
    </>
  )
}