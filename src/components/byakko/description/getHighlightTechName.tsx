import { Link } from '../link';

export const TECH_WORD = [
  {
    value: 'reactjs',
    link: 'https://reactjs.org/',
  },
  {
    value: 'nodejs',
    link: 'https://nodejs.org/',
  },
  {
    value: '.net c#',
    link: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
  },
];

export const TECH_WORD_DICT = TECH_WORD.reduce<Record<string, any>>(
  (acc, w) => {
    acc[w.value] = w.link;
    return acc;
  },
  {}
);

export const getHighlightTechName = (text: string) => {
  const searchJointRegex = TECH_WORD.map((w) => w.value).join('|');
  const regex = new RegExp(searchJointRegex, 'gi');
  const resultArr = [];
  let resultOffset = 0;
  let i = 0;
  // @ts-ignore
  text.replace(regex, (match, offset) => {
    if (resultOffset < offset) {
      resultArr.push(
        <span key={i++}>
          {text.substr(resultOffset, offset - resultOffset)}
        </span>
      );
    }
    resultArr.push(
      <Link href={TECH_WORD_DICT[match.toLowerCase()]} key={i++}>
        {match}
      </Link>
    );
    resultOffset = offset + match.length;
  });

  if (resultOffset < text.length) {
    resultArr.push(<span key={i++}>{text.substr(resultOffset)}</span>);
  }

  return resultArr;
};
