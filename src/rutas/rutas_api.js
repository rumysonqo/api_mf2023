import {Router} from 'express'
import {cnx} from '../db.js'
import {get_programas, get_productos, get_actividades, get_sub_productos} from '../controladores/ctrl_api.js'
const router=Router()


router.get('/programas',get_programas);
router.get('/productos/:prg',get_productos);
router.get('/actividades/:prg/:prd',get_actividades);
router.get('/sub_productos/:prg/:prd/:act',get_sub_productos);

export default router