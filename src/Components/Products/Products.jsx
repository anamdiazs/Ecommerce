import React from 'react'

export default function Products() {
    return (
            <div  className="w-full h-full flex flex-col justify-start rounded-md">
                <div className="w-full  bg-blue-200 ">
                    <img src="./src/Assets/img/banner.jpg" alt="" height="200px"/>

                </div>
                <div className="w-auto h-60 shadow-md  flex flex-col rounded-lg justify-center content-center items-center m-20" id="Card">
                    <div className="text-md font-bold ">
                        <h1>Croque Monseur</h1>
                    </div>
                    <div className="text-xs pl-2 pr-2">
                        <p>Orden de 3 tacos de Arrachera servidos con guacamole </p>
                    </div>
                    <div className="">
                        <img src="./src/Assets/img/tacos.png" width="150px"/>
                    </div>
                    <div className="text-lg font-bold pl-2 pr-2 ">
                    <p>$30</p>
                    </div>
                </div>
            </div>
    )
}
