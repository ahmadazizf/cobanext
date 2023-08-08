import axios from 'axios'
import React, { useState } from 'react'

const LoginForm = ({ setLoginForm }) => {
    const [loadings, setLoadings] = useState(false)
    const [payloadLogin, setPayloadLogin] = useState({
        email: null,
        password: null,
    })
    const Login = () => {
        console.log('login', payloadLogin);
        const payload = {
            identifier: payloadLogin.email,
            password: payloadLogin.password
        }
        const url = process.env.NEXT_PUBLIC_BACKEND_URL + 'api/auth/local'
        axios.post(url, payload)
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    localStorage.setItem('user-token', res.data.jwt)
                    localStorage.setItem('user-data', res.data.user)
                    setLoginForm(false)
                    alert('Login Success')
                } else {
                    alert('Login Failed')
                }
            })
            .catch((err) => {
                console.log(err);
                alert('Login Failed')
            })
    }

    return (
        <div
            className='w-[500px] h-[500px] bg-gray-400 rounded-[24px] bg-clip-padding backdrop-filter
            backdrop-blur-sm bg-opacity-10 p-4 '
        >
            <div className=' flex flex-col items-center gap-10'>
                <h1 className='text-xl font-bold'>Silahkan Login </h1>
                <input
                    onChange={(e) => {
                        setPayloadLogin({
                            ...payloadLogin,
                            email: e.target.value
                        })
                    }}
                    className='w-80 bg-transparent p-2 border-blue-300 border-2 rounded-md'
                    placeholder='Email'
                    type='email'
                />
                <input
                    onChange={(e) => {
                        setPayloadLogin({
                            ...payloadLogin,
                            password: e.target.value
                        })
                    }}
                    className='w-80 bg-transparent p-2 border-blue-300 border-2 rounded-md'
                    placeholder='Password'
                    type='password'
                />
                <div className='flex gap-2'>
                    <button
                        disabled={!payloadLogin.email || !payloadLogin.password}
                        onClick={() => {
                            Login()
                        }}
                        className={!payloadLogin.email || !payloadLogin.password ?
                            'w-40 px-3 py-2 rounded-lg border-2 hover:cursor-not-allowed transition-all border-cyan-500'
                            :
                            'w-40 px-3 py-2 rounded-lg border-2 hover:bg-cyan-500 transition-all border-cyan-500'}
                    >
                        Masuk
                    </button>
                    <button
                        className='px-3 w-40 py-2 rounded-lg border-2 hover:bg-red-500 transition-all border-red-500'
                        onClick={() => setLoginForm(false)}
                    >
                        Batal
                    </button>
                </div>
            </div>
        </div >
    )
}

export default LoginForm