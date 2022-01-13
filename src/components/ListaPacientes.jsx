import Paciente from './Paciente'
const ListaPacientes = ({pacientes, setPaciente, eliminarPaciente})=>{
    return(
        <div className="md:h-screen w-1/2  lg:w-3/5 h-screen overflow-y-scroll">
        {pacientes && pacientes.length ? (
        <>
        <h2 className="font-black text-3xl text-center">
            Lista Pacientes
        </h2>
        <p className="text-center text-xl mt-5 mb-10 ">  Administra tus {""}
            <span className="text-indigo-600 font-bold text-xl">Pacientes y Citas</span>
        </p>
        {
            pacientes.map((paciente, index)=>(
                <Paciente
                key = {paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
                />
            ))
        }
        </>
        ):
        <>
        <h2 className="font-black text-3xl text-center">
            No hay pacientes
        </h2>
        <p className="text-center text-xl mt-5 mb-10 ">  Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold text-xl">y aparecerán en este lugar</span>
        </p>
        </>
        }
        </div>
        
    )
}

export default ListaPacientes