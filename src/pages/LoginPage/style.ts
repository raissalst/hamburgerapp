import styled from "styled-components";

export const MainContainerLoginPage = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 414px;
  height: 621px;
  margin: 0 auto;

  /* border: 1px solid blue; */
  background-color: #ffffff;

  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    width: 943px; //939
    height: 461px;
    margin: 100px auto 0px;
  }
`;

export const ContainerLogin = styled.div`
  width: 380px;
  height: 461px;
  margin: 0 auto;

  /* border: 1px solid red; */
  /* background-color: pink; */

  border-radius: 5px;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);

  h3 {
    margin: 16px 312px 19px 19px;
    text-align: left;

    color: var(--gray-scale-600);

    font-size: var(--font-size-heading3);
    font-weight: bold;

    @media screen and (min-width: 1024px) {
      margin: 21px 424px 24px 14px;
    }
  }

  input {
    height: var(--input-mobile-height);
    width: var(--input-mobile-width);
    margin-bottom: 25px;
    padding: 15px 20px;

    border-radius: var(--input-mobile-borderradius);
    /* border-color: var(--gray-scale-600); */
    border: none;
    /* border-color: red; */
    /* outline: red; */

    background-color: var(--gray-scale-0);

    font-size: var(--font-size-headline);

    :focus {
      border: 2px solid var(--gray-scale-600);
      background-color: #ffffff;
    }

    ::placeholder {
      color: var(--gray-scale-300);
    }

    @media screen and (min-width: 1024px) {
      width: var(--input-desktop-width);
    }
  }
  button {
    height: var(--input-mobile-height);
    width: var(--input-mobile-width);
    margin-bottom: 19px;

    font-size: var(--font-size-headline);
    font-weight: var(--font-w-semibold);

    color: #ffffff;
    background-color: var(--color-primary);

    border-radius: var(--input-mobile-borderradius);
    border: none;

    @media screen and (min-width: 1024px) {
      width: var(--input-desktop-width);
    }

    :hover {
      background-color: #93d7af;
    }
  }

  .cadastrar {
    margin-top: 19px;

    color: var(--gray-scale-300);
    background-color: var(--gray-scale-100);

    :hover {
      color: var(--gray-scale-100);
      background-color: var(--gray-scale-300);
    }
  }

  p {
    height: 38px;
    width: 250px;
    line-height: 19px;
    font-size: var(--font-size-body-600);
    font-weight: var(--font-w-regular);
    color: var(--gray-scale-300);
  }

  @media screen and (min-width: 1024px) {
    width: 500px;
    height: 461px;
    /* margin: 100px auto 0px; */
  }
`;

export const TitleContainer = styled.div`
  width: 380px;
  height: 160px;
  margin: 0 auto;

  border: 1px solid purple;
  /* background-color: pink; */

  @media screen and (min-width: 1024px) {
    width: 439px;
    height: 461px;
    /* margin: 100px auto 0px; */
  }
`;
