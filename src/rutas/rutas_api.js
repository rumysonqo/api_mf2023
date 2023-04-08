import {Router} from 'express'
import {cnx} from '../db.js'
import {get_programas, get_productos, get_actividades, get_sub_productos, get_metas_subpro} from '../controladores/ctrl_api.js'
const router=Router()


router.get('/programas',get_programas);
router.get('/productos/:prg',get_productos);
router.get('/actividades/:prg/:prd',get_actividades);
router.get('/sub_productos/:prg/:prd',get_sub_productos);
router.get('/metas_subpro/:prg/:prd/:sub',get_metas_subpro);

export default router