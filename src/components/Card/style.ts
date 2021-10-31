import styled from "styled-components";

export const ItemLiContainer = styled.li`
  width: 300px;
  height: 346px;
  /* width: 25%; */
  text-align: center;
  margin: 0 auto 50px;
  /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */
  /* padding: 10px 10px 20px; */
  /* max-height: 550px;
  min-width: 235px; */
  font-size: 22px;
  position: relative;
  border: 2px solid var(--gray-scale-100);
  border-radius: 5px;

  :hover {
    border: 2px solid var(--color-primary);

    button {
      background-color: var(--color-primary);
    }
  }

  @media screen and (min-width: 425px) {
    margin: 0 20px 50px;
  }

  div {
    width: 100%;
    height: 150px;

    background-color: var(--gray-scale-0);
  }

  img {
    height: 150px;
    width: 150px;
    /* border: 1px solid red; */

    /* 
    position: absolute;
    bottom: 111px;
    left: 20px;

    width: 260px;
    height: 20px;

    color: var(--gray-scale-300);

    font-size: 12px;
    font-weight: var(--font-w-regular);
    line-height: 20px; */
  }

  h3 {
    position: absolute;
    bottom: 136px;
    left: 20px;

    width: 260px;
    height: 40px;

    color: var(--gray-scale-600);

    text-align: left;
    font-size: 18px;
    font-weight: var(--font-w-bold);
    line-height: 40px;
  }

  h5 {
    position: absolute;
    bottom: 111px;
    left: 20px;

    width: 260px;
    height: 20px;

    color: var(--gray-scale-300);

    text-align: left;
    font-size: 12px;
    font-weight: var(--font-w-regular);
    line-height: 20px;
  }

  p {
    position: absolute;
    bottom: 77px;
    left: 20px;

    width: 260px;
    height: 24px;

    color: var(--color-primary);

    text-align: left;
    font-size: 14px;
    font-weight: var(--font-w-semibold);
    line-height: 24px;
  }

  button {
    position: absolute;
    bottom: 23px;
    left: 20px;

    width: var(--button-medium-width);
    height: var(--button-medium-height);

    background-color: var(--gray-scale-100);
    color: #fff;
    border: none;
    border-radius: var(--button-medium-borderradius);

    font-size: 14px;
    font-weight: var(--font-w-semibold);

    cursor: pointer;

    /* :hover {
      background-color: var(--color-primary);
    } */
  }

  /*  

  .beerDescription {
    font-size: 16px;
    cursor: pointer;
    border: 2px solid #0000007d;
    line-height: 1;
    padding: 2px 0;
    width: 100%;
    text-align: center;
    background-color: rgba(255, 152, 0, 0.8);
  }

  .counterContainer {
    margin: 0 auto;
    direction: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 25px;
    /* border: 1px solid red; */
  /* line-height: 1;
  }

  .counterContainer button {
    padding: 0;
    border-radius: 100%;
    background-color: #ccc;
    color: #000;
    min-width: 25px;
    min-height: 25px;
    max-height: 25px;
    max-width: 25px;
    margin: 0;
  }

  .counterContainer p {
    display: inline;
    padding: 0px 20px;
    height: 25px;
  } */
`;
