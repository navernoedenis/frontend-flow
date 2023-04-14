import type { Article } from 'entities/article';
import { ArticleBlockType } from 'entities/article/article-entity/model/types';

export const articleMock: Article = {
  id: '1',
  title: "DanucD's team won Twitch Rivals",
  image:
    'https://wildcard.gg/wildcarddevgaming/wp-content/uploads/2019/02/Danaspotlightbanner.png',
  views: 422,
  tags: ['technologies'],
  createdAt: '2022.01.15',
  blocks: [
    {
      id: '11',
      type: ArticleBlockType.TEXT,
      paragraphs: [
        "Streamer DanucD's team is the winner of the Twitch Rivals: PUBG 6th Anniversary Throwdown showdown, which took place on March 21. The competition took place on six maps, and the total prize pool of the event was $60,000.",
        'Composition of DanucD won more than nine thousand U.S. dollars. Moonryde finished second and Mithrain rounded out the top three. Notably, DanucD also won the previous Twitch Rivals PUBG tournament.',
      ],
    },
    {
      id: '22',
      type: ArticleBlockType.IMAGE,
      image:
        'https://pubg.ru/thumb/post-carousel/size-post-main/844645a6fdc2e91baf8cf293c34f4534.jpg',
      title: 'Rank',
    },
    {
      id: '33',
      type: ArticleBlockType.CODE,
      title: 'Nodejs Code!',
      code: '{\n  gitProjectManager.baseProjectsFolders: [\n   /home/user/nodeProjects,\n   /home/user/personal/pocs\n ] \n}\n',
    },
  ],
};
