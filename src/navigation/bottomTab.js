import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

export const homeScreen = () => {
  Promise.all([
    Icon.getImageSource('home', 18),
    Icon.getImageSource('heart', 18),
    Icon.getImageSource('paper-plane', 18),
    Icon.getImageSource('user', 18),
  ]).then(([home, wishlist, bell, user]) => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          options: {
            bottomTabs: {
              currentTabIndex: 0,
            },
          },
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      id: 'HOME_SCREEN',
                      name: 'Homepage',
                      options: {
                        topBar: {
                          visible: false,
                        },
                        bottomTab: {
                          text: 'trang chủ',
                          icon: home,
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Wishlist',
                      options: {
                        topBar: {
                          visible: true,
                          title: {
                            text: 'Yêu thích',
                          },
                        },
                        bottomTab: {
                          text: 'Yêu thích',
                          icon: wishlist,
                          animate: false,
                          color: '#8F8F8F',
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Noti',
                      options: {
                        topBar: {
                          visible: true,
                          background: '#F4B9A7',
                          title: {
                            text: 'Lịch Chụp',
                          },
                        },
                        bottomTab: {
                          text: 'Lịch Chụp',
                          icon: bell,
                          animate: false,
                          color: '#8F8F8F',
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Profile',
                      options: {
                        topBar: {
                          visible: false,
                        },
                        bottomTab: {
                          text: 'Tôi',
                          icon: user,
                          animate: false,
                          color: '#8F8F8F',
                        },
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    });
    Navigation.setDefaultOptions({
      bottomTab: {
        textColor: 'black',
        iconColor: 'black',
        selectedIconColor: '#A64244',
        selectedTextColor: '#A64244',
      },
      bottomTabs: {
        visible: true,
        animate: false,
        elevation: 10,
        titleDisplayMode: 'alwaysShow',
        preferLargeIcons: true,
        animateTabSelection: false,
      },
    });
  });
};
