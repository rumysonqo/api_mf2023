import {cnx} from '../db.js'

export const get_programas = async (req,res)=>{
    try{
        const [prg]=await cnx.query('select distinct(cod_programa), programa from meta_fisica_2023 order by cod_programa');
        res.json(prg);
    }catch(error){
        return res.status(500).json({mensaje:'ocurrio un error'});
    }
}

export const get_productos = async (req,res)=>{
    try{
        const [prd]=await cnx.query('select distinct(cod_producto), producto from meta_fisica_2023 where cod_programa = ? order by cod_producto',[req.params.prg]);
        res.json(prd);
    }catch(error){
        return res.status(500).json({mensaje:'ocurrio un error'});
    }
}

export const get_actividades = async (req,res)=>{
    try{
        const [prd]=await cnx.query('select distinct(cod_actividad), actividad from meta_fisica_2023 where cod_programa = ? and cod_producto = ? order by cod_actividad',[req.params.prg, req.params.prd]);
        res.json(prd);
    }catch(error){
        return res.status(500).json({mensaje:'ocurrio un error'});
    }
}

export const get_sub_productos = async (req,res)=>{
    try{
        const [prd]=await cnx.query('select distinct(cod_subfinalidad), sub_finalidad from meta_fisica_2023 where cod_programa = ? and cod_producto = ? order by cod_subfinalidad',[req.params.prg, req.params.prd]);
        res.json(prd);
    }catch(error){
        return res.status(500).json({mensaje:'ocurrio un error'});
    }
}

export const get_metas_subpro = async (req,res)=>{
    try{
        const [met]=await cnx.query('select nom_micro_red, nom_establecimiento, meta_fisica from meta_fisica_2023 where cod_programa = ? and cod_producto = ? and cod_subfinalidad = ? order by nom_micro_red, nom_establecimiento',[req.params.prg, req.params.prd, req.params.sub]);
        res.json(met);
    }catch(error){
        return res.status(500).json({mensaje:'ocurrio un error'});
    }
}