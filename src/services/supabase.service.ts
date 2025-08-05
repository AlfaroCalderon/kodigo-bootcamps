import { supabaseApi } from "@/api/supabase.api";

type RusuarioResponse ={
    id: string;
    name: string;
    lastname: string;
    email: string;
    created_at: string;
    last_sign_in_at: string;
}

type CursosResponse = {
    id: string;
    nombre: string;
    descripcion: string;
    duracion: string;
    modalidad: string;
    fecha_inicio: string;
    categoria: string;
}

export const getRusuarios = async (): Promise<RusuarioResponse[]> =>{
    try{
        const response = await supabaseApi.get('/usuarios',{
            headers:{
                'Prefer': 'return=representation'
            }
        })
        return response.data
    }
    catch(error){
        console.log("Error al obtener los comentarios:", error)
        throw new Error('Fallo de la API')
    }
}

export const getCursos = async (): Promise<CursosResponse[]> => {
    try {
        const response = await supabaseApi.get('/cursos_kodigo', {
            headers: {
                'Prefer': 'return=representation'
            }
        });
        return response.data;
    } catch (error) {
        console.log("Error al obtener los cursos:", error);
        throw new Error('Fallo de la API');
    }
}