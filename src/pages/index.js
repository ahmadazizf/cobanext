import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { getAllAccount, getSelectedAccount } from '@/api/services'
import LoginForm from '@/components/loginForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [listacc, setListacc] = useState([])
  const [loginForm, setLoginForm] = useState(false)
  const [token, setToken] = useState(null)

  const nextUrl = 'http://localhost:3000/'
  const getAccount = async () => {
    const res = await getAllAccount()
    setListacc(res.data.data)
  }

  console.log('login form', token);

  useEffect(() => {
    if (localStorage.getItem('user-token')) {
      setToken(localStorage.getItem('user-token'))
    }
    getAccount()
  }, [loginForm])

  return (
    <div>
      <div className='flex justify-between p-10'>
        <button
          className='p-2 text-xl hover:text-blue-300 hover:scale-110 transition-all'
        >
          Beranda
        </button>
        {
          token ?
            <button
              className='p-2 text-xl hover:text-blue-300 hover:scale-110 transition-all'
              onClick={() => {
                localStorage.clear()
                setToken(null)
              }}
            >
              Logout
            </button> :
            <button
              className='p-2 text-xl hover:text-blue-300 hover:scale-110 transition-all'
              onClick={() => setLoginForm(true)}
            >
              Login
            </button>
        }
      </div>
      <main
        className={`flex min-h-screen flex-col max-w-2xl m-auto items-center pt-24 p-4 ${inter.className}`}
      >
        {
          loginForm ?
            <>
              <div>
                <LoginForm setLoginForm={setLoginForm} />
              </div>
            </>
            :
            <div className='flex transition-all flex-col items-center gap-8 w-full'>
              {listacc?.map((res) => {
                return (
                  <a
                    key={res.id}
                    className='h-full w-full bg-gray-400 rounded-[24px] bg-clip-padding backdrop-filter
                    backdrop-blur-sm bg-opacity-10 p-4 hover:scale-105 transition-all cursor-pointer '
                    href={nextUrl + res.attributes.slug}
                  >
                    {res.attributes.fullname}
                  </a>
                )
              })}

            </div>
        }
      </main>
    </div>
  )
}
