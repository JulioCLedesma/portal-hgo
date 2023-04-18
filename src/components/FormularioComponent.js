import React from 'react'

export const FormularioComponent = ()=>{
    return(
        <div>
            <form>
                <input type = "text" placeholder = 'Nombre'/>
                <input type = "text" placeholder = 'Apellido Paterno'/>
                <input type = "text" placeholder = 'Apellido Materno'/>
                <input type = "text" placeholder = 'Correo electrónico'/>
                <select>
                    <option value = "Enfermería">Enfermería</option>
                    <option value = "Serivicios Generales">Servicios Generales</option>
                </select>
                <textarea placeholder='Describa su requerimiento'></textarea>
                <input type='submit' value="Enviar"/>
            </form>
        </div>
    )
}