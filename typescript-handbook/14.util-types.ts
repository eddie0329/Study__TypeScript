interface PageInfo {
  title: string;
}

type Page = 'home' | 'about' | 'contract';

const temp: Record<Page, PageInfo> = {
  home: { title: 'home' },
  about: { title: 'about' },
  contract: { title: 'contract' }
}
