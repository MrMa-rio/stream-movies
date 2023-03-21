import React from "react";
import { Carousel } from "flowbite-react";

const ThumbInitial = (props) => {

    return (
        <div className=" p-4">
          <div className="flex justify-between items-center"><h2 className=" p-3 text-2xl text-white ">{props.name}</h2>
          <a className="text-white hover:underline hover:text-red-700 cursor-pointer" href={props.a}> Ver Mais</a></div>
          <hr />
          <div className="h-smartphone sm:h-64 xl:h-80 2xl:h-96 m-11 ">
              <Carousel slideInterval={5000}>
              <div>
                <a href="">
                  <img className=" p-6 rounded-xl"
                    src="./src/assets/imagens/thumbMovie.jpg" alt="..."
                  />
                  </a>
                </div>
                <div>
                <a href="">
                  <img className=" p-6 rounded-xl"
                    src="./src/assets/imagens/thumbMovie.jpg" alt="..."
                  />
                  </a>
                </div>
                <div>
                <a href="">
                  <img className=" p-6 rounded-xl"
                    src="./src/assets/imagens/thumbMovie.jpg" alt="..."
                  />
                  </a>
                </div>
                <div>
                <a href="">
                  <img className=" p-6 rounded-xl"
                    src="./src/assets/imagens/thumbMovie.jpg" alt="..."
                  />
                  </a>
                </div>
                
              </Carousel>
            </div>
        </div>
    )
}

export default ThumbInitial

//src no lugar ira colocar o caminho das thumbs da API fazer um map para que cada uma das 
//thumbs apareça no carrossel
