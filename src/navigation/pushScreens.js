import { Navigation } from 'react-native-navigation';
import Login from '../screens/Authentic/Login/Login';
import Icons from '../themes/icons';
import { registerScreens } from './registerScreens';
export const pushScreen = (
  componentId,
  screenApp,
  passProps,
  title,
  visible,
  left,
  visibleBottom,
) => {
  Promise.all([Icons.getImageSource(left, 16)]).then(([leftImage, rightImage]) => {
    Navigation.push(componentId, {
      component: {
        name: screenApp,
        passProps: {
          data: passProps,
          title: title,
        },
        options: {
          topBar: {
            visible: visible,
            title: {
              text: title,
            },
            leftButtons: [
              {
                id: left,
                icon: leftImage,
                fontSize: 10,
                color: '#555',
              },
            ],
          },
          bottomTabs: {
            visible: visibleBottom,
          },
        },
      },
    });
  });
};
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
  Promise.all([Icons.home, Icons.wishlist, Icons.bell, Icons.user]).then(
    ([home, wishlist, bell, user]) => {
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
                            icon: Icons.home,
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
                            visible: false,
                          },
                          bottomTab: {
                            text: 'Yêu thích',
                            icon: Icons.wishlist,
                            fontSize: 18,
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
                            visible: false,
                          },
                          bottomTab: {
                            text: 'Thông báo',
                            icon: Icons.bell,
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
                            icon: Icons.user,
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
    },
  );
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