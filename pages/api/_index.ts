import { withSwagger } from 'next-swagger-doc';
import { swaggerDefinitions } from '@/swagger';

/**
 * @openapi
 * /api:
 *   get:
 *     description: Returns json data of endpoints
 *     responses:
 *       200:
 *         description: JSON
 */
export default withSwagger(swaggerDefinitions)();
