import { Layout, Select, Space, Button, Modal, Drawer } from 'antd';
import { useContext, useEffect, useState } from 'react';
import CryptoContext from '../../context/crypto-context';
import CoinInfoModel from './CoinInfoModal';
import AddAssetForm from './AddAssetForm';

const headerStyle = {
    width: '100%',
    textAlign: 'center',
    height: 60,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

export default function AppHeader () {
  const { crypto } = useContext(CryptoContext);
  const [select, setSelect] = useState(false);
  const [modal, setModal] = useState(false);
  const [coin, setCoin] = useState(null);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const keypress = (e) => {
      if (e.key === '/') {
        setSelect((prev) => !prev);
      }
    }
    document.addEventListener('keypress', keypress)
    return () => document.removeEventListener('keypress', keypress)
  }, [])
  function handleSelect(value) {
    setCoin(crypto.find((coin) => coin.id === value));
    setModal(true);
  }

    return (<Layout.Header style={headerStyle}>
      <Select
        open={select}
        style={{ width: 250 }}
        value="press / to open"
        defaultValue={['china']}
        options={crypto.map((coin) => ({ label: coin.name, value: coin.id, icon: coin.icon }))}
        onSelect={handleSelect}
        onClick={() => setSelect((prev) => !prev)}
        optionRender={(option) => (
          <Space>
            <img style={{ width: 20 }} src={option.data.icon} alt={option.data.label} /> {' '} {option.data.label}
          </Space>
        )}
      />
    <Button type="primary" onClick={() => setDrawer(true)}>Add Asset</Button>

    <Modal open={modal} onCancel={() => setModal(false)} footer={null}>
        <CoinInfoModel coin={coin}/>
    </Modal>

    <Drawer width={600} title="Add Asset" onClose={() => setDrawer(false)} open={drawer} destroyOnClose>
        <AddAssetForm onClose={() => setDrawer(false)}/>
    </Drawer>

    </Layout.Header>)
}