import { ChakraProvider } from '@chakra-ui/react';

import '../App/App.css';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Calendar from './Calendar';
import Navigation from '../Navigation/Navigation';
import CostList from '../Main/CostList';
import CurrentCost from './CurrentCost';
import RevenueList from './RevenueList';
import CurrentBalance from './CurrentBalance';
import NewsList from './NewsList';
import ModalListBalance from '../ModalWithForm/ModalListBalance';
import CostListMobile from '../mobile/CostListMobile';
import RevenueListMobile from '../mobile/RevenueListMobile';
import NavigationMobile from '../mobile/NavigationMobile';

import './MainPage.css';

function MainPage({ handleLogOut }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [activities, setActivities] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  /*para deixar o site mais responsivo, criei um arquivo a parte e
fiz com que ele imprimisse quando atingir certa TbKeyframeAlignHorizontal.*/

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 880);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openModal = (day) => {
    setSelectedDay(day);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedDay(null);
  };
  return (
    <main className="MainPage">
      <Header className="header" />

      {isMobile ? (
        <ChakraProvider>
          <NavigationMobile
            className="navitagion-mobile"
            handleLogOut={handleLogOut}
          />
        </ChakraProvider>
      ) : (
        <Navigation className="navitagion" handleLogOut={handleLogOut} />
      )}

      <CurrentBalance className="current_balance" />
      <CurrentCost className="current_cost" />
      {isMobile ? <RevenueListMobile /> : <RevenueList />}
      <NewsList className="news" />
      <Calendar className="calendar" openModal={openModal} />

      {selectedDay && (
        <ModalListBalance
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          day={selectedDay}
          activities={activities}
          setActivities={setActivities}
        />
      )}

      {isMobile ? <CostListMobile /> : <CostList />}
      <footer className="footer__mobile">© 2024 Bruno Lopes Furuya </footer>
    </main>
  );
}

export default MainPage;
