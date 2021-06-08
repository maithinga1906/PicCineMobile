import { Navigation } from 'react-native-navigation';
import Icons from '../themes/icons';
import Icon from 'react-native-vector-icons/FontAwesome';

export const loginScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Login',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const introScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Intro',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};

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
                      name: 'ShowBooking',
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
/*///////////////////////////////////////////////////////////////*/
export const serviceScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Service',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};
export const detailScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Detail',
              options: {
                topBar: {
                  visible: true,
                  backButton: {
                    id: 'backButton',
                    icon: Icons.back,
                  },
                  height: 10,
                },
              },
            },
          },
        ],
      },
    },
  });
};
export const bookScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'ShowBooking',
              options: {
                topBar: {
                  visible: true,
                  backButton: {
                    id: 'backButton',
                    icon: Icons.back,
                  },
                  height: 10,
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const registerScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Register',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const commentScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Comment',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};
export const infoScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Info',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};
