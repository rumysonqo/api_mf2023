import {Router} from 'express'
import {cnx} from '../db.js'
const router=Router()


router.get('/programas',async (req,res)=>{
    const [prg]=await cnx.query('select distinct(programa) from meta_fisica_2023 order by cod_programa');
    res.json(prg);
});

export default router