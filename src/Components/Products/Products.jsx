import React from 'react'

export default function Products() {
    const productData = [
        {id:1, name:"Tacos de arrachera", description:"Orden de 3 tacos de arrachera servidos con guacamole ", image:"", price:"$30"},
        {id:2, name:"Tacos de bistec", description:"Orden de 3 tacos de bistec servidos con verdura ", image:"", price:"$20"},
        {id:3, name:"Tacos al pastor ", description:"Orden de 3 tacos de pastor servidos con piña ", image:"", price:"$15"},
        {id:4, name:"Tacos de costilla", description:"Orden de 3 tacos de costilla servidos con guacamole ", image:"", price:"$30"}
    ]
    return (
        {productData.map((item) =>(
            <div  className="w-full h-full flex justify-start rounded-md">
                <div className="w-96 h-60  shadow-md  flex flex-col rounded-lg justify-center content-center items-center m-20" id="Card">
                    <div className="text-md font-bold ">
                        <h1>Tacos de Arrachera</h1>
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
        ))}
    )
}
