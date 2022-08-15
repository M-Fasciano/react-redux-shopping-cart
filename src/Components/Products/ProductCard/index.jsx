import React from "react";
import * as Styled from "./styled";
import PropTypes from "prop-types";
import Image from "../../Global/Elements/image";
import Lockup from "../../Global/Elements/lockup";
import { addToBasket } from "../../../redux/basket/basketAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, title, image, price, quantity } = props;

  return (
    <Styled.ProductCard>
      <Styled.ImagContainer>
        <Image url={props.image} alt={props.title} />
      </Styled.ImagContainer>

      <Styled.Content>
        <Lockup text={props.description} tag="h3" title={props.title} />
        <Styled.Price>£{props.price}</Styled.Price>

        <Styled.ButtonWrapper>
          <Styled.Button
            onClick={() =>
              dispatch(addToBasket({ id, title, image, price, quantity }))
            }
          >
            Add to Basket
          </Styled.Button>
          <Styled.Button
            onClick={() => navigate("/basket")}
            aria-label="Navigate to basket page"
          >
            View item
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.Content>
    </Styled.ProductCard>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
};

export default ProductCard;
