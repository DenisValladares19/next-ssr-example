import styled from 'styled-components';
import { categoriaWithOffer } from 'interfaces/categoria';
import Coupon from './Coupon';

interface CategoryItemProps {
    category: categoriaWithOffer;
    children?: JSX.Element | JSX.Element[];
}

const CategoryItem = ({ category, children }: CategoryItemProps) => {
    return (
        <Wrapper>
            <div className="title">
                <div className="icon">
                    <img src={category.icon} alt="" />
                </div>
                <div className="text">{category.name}</div>
            </div>
            <div className="list-cupons">
                {category.offers.map((offer) => (
                    <Coupon offer={offer} key={offer.id} />
                ))}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;

    .title {
        display: flex;
        width: 100%;
        height: 55px;
        background-color: var(--primary-color);
        align-items: center;
        .icon {
            width: 70px;
            height: 55px;
            background: var(--secondary-color);
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                max-width: 65%;
                max-height: 65%;
                filter: invert(0%) sepia(53%) saturate(6%) hue-rotate(71deg)
                    brightness(103%) contrast(360%);
            }
        }

        .text {
            font-size: 15px;
            font-weight: bold;
            margin-left: 15px;
            color: var(--white-color);
            text-transform: uppercase;
        }
    }

    .list-cupons {
        display: flex;
        flex-wrap: wrap;
        transition: flex-wrap 0.4s ease-in-out;
    }
`;

export default CategoryItem;
