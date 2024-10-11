import i18n from "@/i18n";

export default {
  menus: [
    {
      title: i18n.global.t('common.map'),
      url: '/map',
    },
    {
      title: i18n.global.t('common.buddiz'),
      url: '/buddiz',
    },
    {
      title: i18n.global.t('common.notice'),
      url: '/board',
    },
    {
      title: i18n.global.t('common.chat'),
      url: '/chat',
    },
  ],

  accoutMenus: {
    login: {
      url: '/auth/login',
      title:  i18n.global.t('common.login'),
    },
  },
};
