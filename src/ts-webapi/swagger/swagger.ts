import * as  swaggerUi from 'swagger-ui-express'
import { Router } from 'express'
import { swaggerYaml } from './swagger.yaml'
const YAML = require('yamljs');

const swaggerDocument = YAML.parse(swaggerYaml);
const router = Router();
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
export default router;

