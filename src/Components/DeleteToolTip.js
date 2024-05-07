import {DeleteOutlined} from '@ant-design/icons';
import {Tooltip} from 'antd';

export const DeleteToolTip = ({id, storage, setStorage}) => {
  return (
    <Tooltip title="Delete" color="blue">
      <DeleteOutlined 
        onClick = {() => {
          let toStorage = storage.filter(item => item.id !== id);
          setStorage(toStorage);
        }}
      />
    </Tooltip>
  )
}