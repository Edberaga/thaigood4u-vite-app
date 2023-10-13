import { CarryOutOutlined, FormOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../../firebase'
import { collection, getDocs, query } from 'firebase/firestore';
import './ListData.css'
 
const ListData = () => {
  const [user] = useAuthState(auth);
  const myEmail = user.email;
  const [data, setData] = useState(null);
 
  const colRef = collection(db, "users");
 
  const BuildNewTree = (theEmail, theKey, docArray) => {
    const myNode = docArray.find(d => d.email === theEmail);
    if (!myNode) throw new Error('No doc found for email:', theEmail);
    const newNode = []
    newNode.push({
      title: `${myNode.name} (${myNode.code})`,
      key: `${theKey}`,
      icon: <CarryOutOutlined />,
    });
 
    const myCode = myNode.code;
    const myChildren = docArray.filter(d => d.inviterCode === myCode);
 
    //Build child, (I hope this will deleted soon...)
    const BuildChildTree = (theEmail, theKey, docArray) => {

      const myNode = docArray.find(d => d.email === theEmail);
      if (!myNode) throw new Error('No doc found for email:', theEmail);
 
      const newNode = {
        title: `${myNode.name} (${myNode.code})`,
        key: `${theKey}`,
        icon: <CarryOutOutlined />,
      };
 
      const myCode = myNode.code;
      const myChildren = docArray.filter(d => d.inviterCode === myCode);
      if(myChildren.length === 0) return newNode;
 
      newNode.children = myChildren.map((child) =>
        BuildChildTree(child.email, theKey + '-0', docArray)
      );
      return newNode;
 
    };
    //Build child, (I hope this will deleted soon...)
 
    if(myChildren.length === 0) return newNode;
      newNode[0].children = myChildren.map((child) =>
        BuildChildTree(child.email, theKey + '-0', docArray)
      );
    return newNode;
  };
 
  useEffect(() => {
      getDocs(colRef).then((snapshot) => {
        console.log("Num of docs retrieved:", snapshot.size);
        const tempArray = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id}
        })
        console.log("Update state with:", tempArray);
        setData(tempArray);
      })
      .catch(err => {
        console.log("Uh-oh:", err.message);
      })
  }, []);
 
  console.log("Doc: ", data);
  console.log("Email: ",user.email);
 
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
 
  if (!data) return <div>Data is loading. . .</div>
  const newOrder = BuildNewTree(myEmail, '0-0', data);
  console.log("New order", newOrder);
 
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