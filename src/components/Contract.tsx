import { CONTACT } from '../constants'
import resume from "../assets/Aditya Gupta(FE).pdf"
const Contract = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h1 className='my-10 text-center text-4xl'>Get in Touch</h1>
      <div className="flex flex-row gap-4 justify-center text-center tracking-tighter">
        <p className='my-4'>{CONTACT.phoneNo}</p>
        <a className='my-4' href={CONTACT.email}>{CONTACT.email}</a>
        <a  href={resume} className='my-4 underline' download={'resume'}>Resume</a>
      </div>
    </div>
  )
}

export default Contract
