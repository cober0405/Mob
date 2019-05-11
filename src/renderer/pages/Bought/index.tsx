import React, { useState, useEffect } from 'react';

import myApi, { BroughtRspData, BroughtItem } from '@/services/my';

import styles from './index.css';
import { Empty } from 'antd';

export interface AlbumsInfoItemProps {
  data: BroughtItem;
}

const AlbumsInfoItem = ({ data }: AlbumsInfoItemProps) => {
  return <div>{data.name}</div>;
};

export interface AlbumsInfosProps {
  data: BroughtRspData;
}

function AlbumsInfos({ data }: AlbumsInfosProps) {
  return (
    <div>
      <Empty />
    </div>
  );
}

export default function() {
  const [broughtAlbumsRsp, setBroughtAlbumsRsp] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await myApi.getHasBroughtAlbums();
      setBroughtAlbumsRsp(data);
    })();
  }, []);

  return (
    <div className={styles.wrap}>
      {broughtAlbumsRsp ? (
        <AlbumsInfos data={broughtAlbumsRsp} />
      ) : (
        'loading...'
      )}
      <div style={{ textAlign: 'center', color: '#1890ff' }}>正在开发中...</div>
    </div>
  );
}
