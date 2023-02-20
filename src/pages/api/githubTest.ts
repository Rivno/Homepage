// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

import { FEED_URL_TYPE, MAP_URL } from '@/helpers/feedConstant';

type Data = {
  data: any;
};

const config = {
  githubUsername: process.env.GITHUB_USERNAME,
  githubToken: process.env.GITHUB_TOKEN,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // get rs file groupe by category
    // const branch = await axios.get(
    //   `https://api.github.com/repos/${config.githubUsername}/rust-algo/branches/main`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${config.githubToken}`,
    //       'Content-Type': 'application/json',
    //       Accept: 'application/vnd.github.mercy-preview+json',
    //     },
    //   }
    // );

    // const result = await axios.get(
    //   `https://api.github.com/repos/${config.githubUsername}/rust-algo/git/trees/${branch.data.commit.sha}?recursive=2`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${config.githubToken}`,
    //       'Content-Type': 'application/json',
    //       Accept: 'application/vnd.github.mercy-preview+json',
    //     },
    //   }
    // );

    // const datas = new Map();
    // for (let index = 0; index < result.data.tree.length; index++) {
    //   const element = result.data.tree[index];
    //   if (element.path.match(/^(?!.*(main|mod)).*\.rs$/)) {
    //     const category = element.path.match(/^.*\/(.*)\/.*\.rs$/)[1];
    //     const categoryData = datas.get(category) || [];
    //     categoryData.push(element);
    //     datas.set(category, categoryData);
    //   }
    // }

    // res.status(200).json({
    //   data: Object.fromEntries(datas),
    // });

    // -----------------

    // get file content
    // const testContent = await axios.get(
    //   `https://api.github.com/repos/Rivno/rust-algo/git/blobs/f10058cd80e3a586d3fcd8483f489736a381a83e`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${config.githubToken}`,
    //       'Content-Type': 'application/json',
    //       Accept: 'application/vnd.github.mercy-preview+json',
    //     },
    //   }
    // );
    // res.status(200).json({
    //   data: testContent.data.content,
    // });

    res.status(200).json({
      data: 'nothing xD',
    });
  } catch (error) {
    console.error(`Error reading feed - ${req.query.url} :`, error);
    res.status(500).json({ data: error });
  }
}

// {
//   "data": "I1thbGxvdyhkZWFkX2NvZGUpXQpwdWIgZm4gY2xpbWJfc3RhaXJzKG46IGkz\nMikgLT4gaTMyIHsKICAgIGxldCBtdXQgZmlib25hY2NpID0gdmVjIVswOyAo\nbisyKSBhcyB1c2l6ZV07CgogICAgZmlib25hY2NpWzFdID0gMTsKICAgIGZp\nYm9uYWNjaVsyXSA9IDI7CgogICAgZm9yIGkgaW4gM3VzaXplLi4obisxKSBh\ncyB1c2l6ZSB7CiAgICAgICAgZmlib25hY2NpW2ldID0gZmlib25hY2NpW2kg\nLSAyXSArIGZpYm9uYWNjaVtpIC0gMV07CiAgICB9CgogICAgZmlib25hY2Np\nW24gYXMgdXNpemVdCn0KCiNbY2ZnKHRlc3QpXQptb2QgdGVzdHMgewogICAg\ndXNlIHN1cGVyOjoqOwoKICAgICNbdGVzdF0KICAgIGZuIGNhc2UxKCkgewog\nICAgICAgIGxldCBlbnRyeSA9IDI7CiAgICAgICAgbGV0IGV4cGVjdGVkID0g\nMjsKICAgICAgICBsZXQgcmVzdWx0ID0gY2xpbWJfc3RhaXJzKGVudHJ5KTsK\nICAgICAgICBhc3NlcnRfZXEhKHJlc3VsdCwgZXhwZWN0ZWQpOwogICAgfQoK\nICAgICNbdGVzdF0KICAgIGZuIGNhc2UyKCkgewogICAgICAgIGxldCBlbnRy\neSA9IDM7CiAgICAgICAgbGV0IGV4cGVjdGVkID0gMzsKICAgICAgICBsZXQg\ncmVzdWx0ID0gY2xpbWJfc3RhaXJzKGVudHJ5KTsKICAgICAgICBhc3NlcnRf\nZXEhKHJlc3VsdCwgZXhwZWN0ZWQpOwogICAgfQoKICAgICNbdGVzdF0KICAg\nIGZuIGNhc2UzKCkgewogICAgICAgIGxldCBlbnRyeSA9IDY7CiAgICAgICAg\nbGV0IGV4cGVjdGVkID0gMTM7CiAgICAgICAgbGV0IHJlc3VsdCA9IGNsaW1i\nX3N0YWlycyhlbnRyeSk7CiAgICAgICAgYXNzZXJ0X2VxIShyZXN1bHQsIGV4\ncGVjdGVkKTsKICAgIH0KfQ==\n"
// }

//decodeURIComponent(escape(window.atob(CONTENT_HERE)))
