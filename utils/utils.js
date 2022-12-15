export function formatToken() {
  let token = localStorage.getItem('token');
  if (token === 'null') token = JSON.parse(token);
  else token = token?.replace(/\"/g, '');
  return token;
}

// 操作导航
export function handleNav(key, config, push) {
  if (key === 'home' || key === 'mainLogo') {
    push('/');
    return;
  }
  let url;
  switch (key) {
    case 'login':
      url = `${config.VITE_OMNI_URL}/register`;
      break;
    case 'destypage':
      url = config.VITE_PAGE_URL;
      break;
    case 'destystore':
      url = config.VITE_STORE_URL;
      break;
    case 'destyomni':
      url = 'https://omni.desty.app';
      break;
    case 'destymenu':
      url = config.VITE_MENU_URL;
      break;
    case 'blog':
    case 'companyblog':
      url = 'https://desty.page/blog';
      break;
    case 'career':
    case 'companycareer':
      url = 'https://desty.freshteam.com/jobs';
      break;
    case 'helpcenter':
      url = 'https://desty.tawk.help/category/desty-menu';
      break;
    case 'companycontactus':
      url = `${config.VITE_HOME_URL}/ajak`;
      break;
    case 'instagram':
      url = 'https://www.instagram.com/desty.app';
      break;
    case 'facebook':
      url = 'https://www.facebook.com/desty.commerce';
      break;
    case 'linkedin':
      url = 'https://www.linkedin.com/company/destyapp';
      break;
    case 'youtube':
      url = 'https://www.youtube.com/channel/UC7xucpjHrWRs3XGJJoC8lJA';
      break;
    case 'privacy':
      url = `${config.VITE_HOME_URL}/privacy`;
      break;
    case 'terms':
      url = `${config.VITE_HOME_URL}/terms`;
      break;
    default:
      break;
  }
  if (url) location.href = url;
}