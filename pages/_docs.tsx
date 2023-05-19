import { swaggerDefinitions } from '@/swagger';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createSwaggerSpec } from 'next-swagger-doc';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic<{
	spec: any;
	// @ts-ignore
}>(import('swagger-ui-react'), { ssr: false });

export const getStaticProps: GetStaticProps = async () => {
	const spec: Record<string, any> = createSwaggerSpec(swaggerDefinitions);

	return {
		props: {
			spec,
		},
	};
};

export default function ApiDoc({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
	return <SwaggerUI spec={spec} />;
}
