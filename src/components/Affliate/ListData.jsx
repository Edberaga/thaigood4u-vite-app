import { CarryOutOutlined, FormOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import { useState } from 'react';
import './ListData.css'

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

const BuildNewTree = (theEmail, theKey, docArray) => {
  let myNode = docArray.find(d => d.email === theEmail);
  if (!myNode) {
    throw new Error('No doc found for email:', theEmail);
  }
  let newNode = []
  newNode.push({
    title: `${myNode.name} (${myNode.code})`,
    key: `${theKey}`,
    icon: <CarryOutOutlined />,
  });

  let myCode = myNode.code;
  let myChildren = docArray.filter(d => d.inviterCode === myCode);

  //Build child, (I hope this will deleted soon...)
  const BuildChildTree = (theEmail, theKey, docArray) => {
    let myNode = docArray.find(d => d.email === theEmail);
    if (!myNode) {
      throw new Error('No doc found for email:', theEmail);
    }
    
    let newNode = {
      title: `${myNode.name} (${myNode.code})`,
      key: `${theKey}`,
      icon: <CarryOutOutlined />,
    };
  
    let myCode = myNode.code;
    let myChildren = docArray.filter(d => d.inviterCode === myCode);
    if(!myChildren) {
      return newNode;
    }
    else {
      newNode.children = myChildren.map((child) =>
        BuildChildTree(child.email, theKey + '-0', docArray)
      );
    }
    return newNode;
  };
  //Build child, (I hope this will deleted soon...)

  if(!myChildren) {
    return newNode;
  }
  else {
    newNode[0].children = myChildren.map((child) =>
      BuildChildTree(child.email, theKey + '-0', docArray)
    );
  }

  return newNode;
};

//let orderedTreeData = BuildTree(myEmail, '0-0', docArray);
let newOrder = BuildNewTree(myEmail, '0-0', docArray);

//console.log("List: ", orderedTreeData);
console.log( newOrder);

const ListData = () => {
  const [showLine, setShowLine] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [showLeafIcon, setShowLeafIcon] = useState(false);
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  
  return (
    <div>
      <h2>Default Tree</h2>
      <Tree
        showLine={true}
        showIcon={true}
        defaultExpandedKeys={['0-0-0']}
        onSelect={onSelect}
        treeData={newOrder}
      />
    </div>
  );
};
export default ListData;