import { CarryOutOutlined, FormOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import { useState } from 'react';


const defaultTreeData = [
  {
    title: 'Jackson034 (JACKSONTHAI9062023)',
    key: '0-0',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: 'Ana chan (ANATHAI27062023)',
        key: '0-0-0',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'David (DavidI11102023)',
            key: '0-0-0-0',
            icon: <CarryOutOutlined />,
          },
          {
            title: 'Thomson (THOMSON12302023)',
            key: '0-0-0-1',
            icon: <CarryOutOutlined />,
          },
          {
            title: 'Jerry (JERRY12302023)',
            key: '0-0-0-2',
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: 'Thomas(THOMSON12302023)',
        key: '0-0-1',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'leaf',
            key: '0-0-1-0',
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: 'Tony (THOMSON12302023)',
        key: '0-0-2',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'leaf',
            key: '0-0-2-0',
            icon: <CarryOutOutlined />,
          },
          {
            title: 'leaf',
            key: '0-0-2-1',
            icon: <CarryOutOutlined />,
            switcherIcon: <FormOutlined />,
          },
        ],
      },
    ],
  },
  {
    title: 'John0118 (JOHN12302023)',
    key: '0-1',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: 'Username (USER12302023)',
        key: '0-1-0',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'Username (USER12302023)',
            key: '0-1-0-0',
            icon: <CarryOutOutlined />,
          },
          {
            title: 'Username (USER12302023)',
            key: '0-1-0-1',
            icon: <CarryOutOutlined />,
          },
        ],
      },
    ],
  },
];

const DefaultListData = () => {
  const [showLine, setShowLine] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [showLeafIcon, setShowLeafIcon] = useState(true);
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
        treeData={defaultTreeData}
      />
    </div>
  );
};
export default DefaultListData;