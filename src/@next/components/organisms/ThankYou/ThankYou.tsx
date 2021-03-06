import React from "react";

import { Button } from "@components/atoms";
import { Container } from "@components/templates";

import * as S from "./styles";
import { IProps } from "./types";

/**
 * Thank you page after completing the checkout.
 */
const ThankYou: React.FC<IProps> = ({
  orderNumber,
  continueShopping,
  orderDetails,
}: IProps) => {
  return (
    <Container data-test="thankYouView">
      <S.Wrapper>
        <S.ThankYouHeader>
          Thank you
          <br />
          <span>for your order!</span>
        </S.ThankYouHeader>
        <S.Paragraph>
          Your order number is <span>{orderNumber}</span>
        </S.Paragraph>
        <S.Paragraph>
          We’ve emailed you an order confirmation, and we’ll notify you the when
          order has been shipped.
        </S.Paragraph>
        <S.Buttons>
          <Button
            testingContext="continueShoppingButton"
            onClick={continueShopping}
            color="secondary"
            fullWidth
          >
            CONTINUE SHOPPING
          </Button>
          <Button
            testingContext="gotoOrderDetailsButton"
            onClick={orderDetails}
            fullWidth
          >
            ORDER DETAILS
          </Button>
        </S.Buttons>
      </S.Wrapper>
    </Container>
  );
};

export { ThankYou };
