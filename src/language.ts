import content from './language.json';

const language = {
  text(key: string | null): string {
    if (key === null || key === '') {
      return '';
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return key.split('.').reduce((o: any, i: any) => o[i], content);
  },
};

export default language;
