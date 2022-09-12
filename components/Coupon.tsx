import { offer } from 'interfaces/offer';
import styled from 'styled-components';
import CustomButton from './CustomButton';
import moment from 'moment';

interface CouponProps {
    onClick?: (offer: offer) => void;
    offer: offer;
}

const Coupon = ({ offer }: CouponProps) => {
    return (
        <Wrapper>
            <div className="image">
                <img src={offer.img} alt={offer.offerName} />
            </div>
            <div className="title-cupon">
                <div className="icon">
                    <img src={offer.logo} alt={offer.offerName} />
                </div>
                <div className="text">{offer.offerName}</div>
            </div>
            <div className="price">
                <div className="text-price">${offer.price}</div>
            </div>
            <div className="descuento">
                <div style={{ fontWeight: 'bold' }}>50% OFF</div> {` | `}
                <div style={{ fontSize: '18px' }}>ANTES $30.98</div>
            </div>
            <div className="center">
                <CustomButton color="primary">ver detalle</CustomButton>
            </div>

            <div className="center">
                comprados &nbsp; <strong>{offer.buys}</strong>&nbsp; | finaliza
                en:{' '}
                <strong>
                    {/* {moment(offer.limitTimeUI).diff(
                        moment().format('YYYY/MM/DD'),
                        'days'
                    )} */}
                    &nbsp; dias
                </strong>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 31%;
    margin: 10px auto;
    transition: all 0.4s ease-in-out;

    display: flex;
    flex-direction: column;
    .image {
        width: 100%;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 10px;
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }

    .title-cupon {
        width: 100%;
        display: flex;
        .icon {
            width: 80px;
            display: flex;
            height: 100%;
            justify-content: center;
            align-items: center;

            img {
                max-width: 100%;
                max-height: 100%;
            }
        }

        .text {
            font-size: 15px;
            background-color: rgb(51, 51, 51);
            color: var(--white-color);
            padding: 10px;
            width: 100%;
        }
    }

    .price {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .text-price {
            font-size: 48px;
            color: var(--secondary-color);
            font-weight: bold;
            line-height: 53px;
        }
    }

    .descuento {
        display: flex;
        justify-content: center;
        color: var(--font-color);
        font-size: 22px;
        align-items: center;
    }

    .center {
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 850px) {
        width: 48%;
    }

    @media screen and (max-width: 550px) {
        width: 100%;
    }
`;

export default Coupon;
