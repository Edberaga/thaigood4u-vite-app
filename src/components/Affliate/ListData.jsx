import { CarryOutOutlined, FormOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../../firebase'
import { collection, getDocs, query } from 'firebase/firestore';
import './ListData.css'

const ListData = () => {
  const [user] = useAuthState(auth);
  let myEmail = user.email;
  let data = [];

  /*const BuildNewTree = (theEmail, theKey, docArray) => {
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
  */

  const colRef = collection(db, "users");

  const fetchData = () => {
    getDocs(colRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id})
      })
      console.log("Process doc: ", data);
    })
    .catch(err => {
      console.log(err.message);
    })
  };

  console.log("Doc: ", data);
  console.log("Email: ",user.email);

  fetchData();
  //newOrder = BuildNewTree(myEmail, '0-0', data);

  //console.log("New order", newOrder);

  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  
  return (
    <div>
      {/*
      <Tree
        showLine={true}
        showIcon={true}
        defaultExpandedKeys={['0-0-0']}
        onSelect={onSelect}
        treeData={newOrder}
      />
  */}
    </div>
  );
};
export default ListData;