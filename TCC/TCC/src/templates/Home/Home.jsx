import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'
 
 
const Home = () => {
 
    return (
        <div className="flex bg-grey">
           <Sidebar />
           <div className=" shadow-black drop-shadow-xl w-full">
            <div className=" container flex flex-col w-full justify-items-center">
           <Header
                    goto={'/'}
                    title={'Home'}
                    />
               <section className="h-[45%] w-full p-2 bg-white flex flex-col justify-items-center  align-center  rounded-bl-xl rounded-br-xl">
                    <div className="flex justify-around">
                        <Link to={'/usuario'}>
                            <button className="bg-orange text-black m-2 py-2 px-4 rounded md:ml-8  hover:bg-black hover:text-orange duration-500">Usuários</button>
                        </Link>
                        <Link to={'/kit'} >
                            <button className="bg-orange text-black m-2 py-2 px-4 rounded md:ml-8  hover:bg-black hover:text-orange duration-500">Kits</button>
                        </Link>
                    </div>
                </section>
           </div>
           </div>
        </div>
    )
}
 
export default Home