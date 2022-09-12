import { ResponseApi } from 'api';
import { getCategoryWebIndex } from 'api/categoryApi';
import { categoryIndex } from 'interfaces/categoria';
import Layout from 'layout';
import styled from 'styled-components';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import CategoryItem from 'components/CategoryItem';
import CustomResult from 'components/CustomResult';
import CustomButton from 'components/CustomButton';

interface IndexProps {
    data: categoryIndex;
    isError: boolean;
    isSuccess: boolean;
}
export const getStaticProps: GetStaticProps<IndexProps> = async (context) => {
    try {
        let data: ResponseApi<categoryIndex> = await getCategoryWebIndex();

        return {
            props: {
                data: data.result,
                isSuccess: true,
                isError: false,
            },
            revalidate: 5 * 60,
        };
    } catch (error) {
        return {
            props: {
                data: null,
                isSuccess: false,
                isError: true,
            },
        };
    }
};

const Index = ({
    data,
    isSuccess,
    isError,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    console.log('in component', data);

    const onClickReload = () => {
        window.location.reload();
    };

    if (isError) {
        return (
            <Layout>
                <CustomResult
                    status="500"
                    title="Ups... ocurrio un error con la red"
                    subTitle={
                        <p>
                            Intenta revisando tu conexion wifi o datos moviles y
                            recarga nuevamente! <br /> si el problema persiste
                            comunicate con el equipo de soporte <br /> Gracias
                            por usar pagapoco.com
                        </p>
                    }
                    extra={
                        <CustomButton color="primary" onClick={onClickReload}>
                            recargar
                        </CustomButton>
                    }
                />
            </Layout>
        );
    }

    if (isSuccess) {
        return (
            <Layout>
                <h1>Hello word TS</h1>
                <Wrapper>
                    {data.categories
                        .filter((cat) => cat.offers.length > 0)
                        .map((categoria) => (
                            <CategoryItem
                                category={categoria}
                                key={categoria.id}
                            />
                        ))}
                </Wrapper>
            </Layout>
        );
    }
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export default Index;
