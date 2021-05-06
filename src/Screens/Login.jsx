import React from 'react'

export default function Login() {
    return (
        <div className="w-full h-screen flex justify-center content-center items-center">
                <div className=" w-80 h-80 flex flex-col items-center content-center ">
                    <div className="w-64 h-8 rounded-md border-2 pl-2 mb-4">
                        <input className="w-full h-full focus:outline-none" type="text" placeholder="usuario"></input>
                    </div>
                    <div className="w-64 h-8 rounded-md focus:outline-none border-2 mb-4 pl-2 ">
                        <input className="w-full h-full focus:outline-none"  type="password" placeholder="contraseña"></input>
                    </div>
                    <div className="w-64 h-8 border-2 border-transparent bg-blue-600 text-white  mb-4 rounded-md">
                        <button type="submit" className="w-full h-full text-sm focus:outline-none">Iniciar sesión</button>
                    </div>
                    <div className="w-64 h-8 border-2 border-transparent text-blue-600  rounded-md">
                        <button type="submit" className="w-full h-full text-sm focus:outline-none">¿Aún no tienes cuenta?</button>
                    </div>

                </div>
        </div>
    )
}
