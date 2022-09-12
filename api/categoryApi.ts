import { ResponseApi } from 'api';
import { categoryIndex } from 'interfaces/categoria';

const pathWebIndex =
    'https://iw2xq1j335.execute-api.us-east-2.amazonaws.com/production/i-strategies-gea-ws-config/web/offers/indexWeb';

export const getCategoryWebIndex = async (): Promise<
    ResponseApi<categoryIndex>
> => {
    return new Promise<ResponseApi<categoryIndex>>(async (resolve, reject) => {
        try {
            let response = await fetch(pathWebIndex);
            let data = await response.json();
            resolve({ ...data });
        } catch (error) {
            reject(new Error('Error ' + error));
        }
    });
};
