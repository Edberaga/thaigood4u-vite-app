import { CarryOutOutlined, FormOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './ListData.css'


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

const ListData = () => {
  const [user] = useAuthState(auth);
  //const [docArray, setDocArray] = useState([]);

  let myEmail = user.email;
  console.log("Email: ",user.email);

  let docArray = [
    {
      code: 'THAIEDBERT01',
      email: 'edbertjonnathan@gmail.com',
      inviterCode: 'THAIKASEY01',
      name: 'Edbert',
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
  

  /*
  useEffect(() => {
    const fetchData = async() => {
      let list = [];
      try{
        const q = query(collection(db, "users"));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          list.push({ id:doc.id, ...doc.data()});
          console.log(doc.id, " => ", doc.data());
        });
        setDocArray(list);
      }
      catch(error){
        console.log(error);
      }
    };
    fetchData();
  },[]);

  console.log("Array: ", docArray);
  */

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
  
  let newOrder = BuildNewTree(myEmail, '0-0', docArray);
  console.log( newOrder);

  
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  
  return (
    <div>
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