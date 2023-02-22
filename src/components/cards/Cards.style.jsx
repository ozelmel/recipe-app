import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex";

export const MainContainer = styled(Flex)`
  /* arama yapıldığında açılan yiyecek kartlarının kutusu */
  flex-direction: row;
  /* height: fit-content; */
`;

export const Card = styled(Flex)`
  /* search den sonra çıkan herbir yiyecek kart */
  height: 20rem;
  background: ${({ theme }) => theme.colors.navbarBgColor};
  padding: 0.5rem;
  border-radius: 3px;
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0.7rem;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
    /* box-shadow: none özelliğinin yavaşça uygulanmasını sağlar; */
  }
`;

export const Image = styled.img`
  /* kartların içindeki resimler */
  height: 10rem;
  border-radius: 10px;
`;

export const Button = styled.button`
  /* view more  buton */
  background: ${({ theme }) => theme.colors.mainColor};
  padding: 0.7rem;
  outline: none;
  height: 2rem;
  border: none;
  margin: 0.5rem;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

export const Header = styled.h1`
  /* kartlardaki yiyeceklerin adları */
  font-size: 1.5rem;
  text-align: center;
`;

export const ImgDiv = styled.div`
  /* anasayfadaki aşçı resminin en dış kutusu */

  display: flex;
  justify-content: center;
  margin: 50px;
  background-color: #00adb5;
`;
