import styled from "styled-components";
import { device } from "../Global/devices";
import theme from "../Global/variables";

export const BasketListItem = styled.li`
  @media ${device.tablet} {
    display: flex;
    border-bottom: 1px solid ${theme.gray100};
    margin-bottom: 20px;
    width: 100%;
  }

  .basket {
    &__list-item-image-wrapper {
      text-align: center;

      @media ${device.tablet} {
        text-align: left;
        min-width: 40%;
      }
    }

    &__list-item-image {
      padding: 1rem;
      max-height: 200px;
    }

    &__list-item-info {
      padding: 1rem;

      @media ${device.tablet} {
        padding: 1rem 0;
        width: 60%;
      }
    }

    &__list-item-title {
      font-size: 1rem;
    }

    &__list-item-price {
      font-size: 1.5rem;
    }

    &__list-item-buttons {
      display: flex;
    }

    &__list-item-btn {
      background-color: ${theme.blue300};
      border-radius: 5px;
      color: ${theme.white};
      font-weight: bold;
      line-height: 40px;
      text-align: center;
      transition: background-color 0.35s ease;
      width: 40px;

      &:hover {
        background-color: ${theme.blue200};
        transition: background-color 0.35s ease;
      }

      &--remove {
        margin-left: auto;
        width: auto;
        padding: 0 20px;
      }
    }

    &__list-item-quantity {
      display: inline-block;
      line-height: 40px;
      text-align: center;
      width: 40px;
    }
  }
`;
