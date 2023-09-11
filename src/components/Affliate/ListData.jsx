import { CarryOutOutlined, CheckOutlined, FormOutlined } from '@ant-design/icons';
import { Select, Switch, Tree } from 'antd';
import { useState } from 'react';
import DefaultListData from '../AffliateDefault/DefaultListData';

let myEmail = 'jackson@gmail.com';

let docArray = [
  {
    code: 'THAIJACKSON01',
    email: 'jackson@gmail.com',
    inviterCode: '',
    name: 'Jackson',
  },
  {
    code: 'THAIDAVID01',
    email: 'david@gmail.com',
    inviterCode: 'THAIANA01',
    name: 'David',
  },
  {
    code: 'THAIANA01',
    email: 'ana@gmail.com',
    inviterCode: 'THAIJACKSON01',
    name: 'Ana',
  },
  {
    code: 'THAIJERRY01',
    email: 'jerry@gmail.com',
    inviterCode: 'THAIANA01',
    name: 'Jerry',
  },
];

const buildTree = (theEmail, theKey, docArray) => {
  let myNode = docArray.find(d => d.email === theEmail);
  if (!myNode) {
    throw new Error('No doc found for email:', theEmail);
  }

  let myCode = myNode.code;
  let myChildren = docArray.filter(d => d.inviterCode === myCode);

  myNode.children = myChildren.map((child) =>
    buildTree(child.email, theKey + '-0', docArray)
  );

  return myNode;
};

let orderedTreeData = buildTree(myEmail, '0-0', docArray);

console.log(orderedTreeData);

const ListData = () => {
  
  return (
    <div>
      
    </div>
  );
};
export default ListData;