import { DeleteToolTip } from './DeleteToolTip';
import {Tabs, Empty } from 'antd';
import WordCard from "./WordCard"
import { useStorage } from '../Hooks/useStorage';

const Dictionary = () => {
  const [storage, setStorage] = useStorage(`words`, [])

  return (
    <Tabs defaultActiveKey="EN-RU">
      <Tabs.TabPane tab="EN-RU" key="EN-RU">
        {
          storage.length && storage.some(item => item.lang === "EN-RU")
          ? storage.map(item => {
              if(item.lang === "EN-RU") {
                return <WordCard 
                  key = {item.id}
                  word = {item.word} 
                  translation = {item.translation}
                  extra = {<DeleteToolTip 
                    id={item.id} 
                    storage={storage}  
                    setStorage={setStorage}
                  />}
                />
              } else {
                return null
              }
            })
          : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/> 
        }
      </Tabs.TabPane>
      <Tabs.TabPane tab="RU-EN" key="RU-EN">
        {
          storage.length && storage.some(item => item.lang === "RU-EN")
          ? storage.map(item => {
              if(item.lang === "RU-EN") {
                return <WordCard 
                  key = {item.id}
                  id = {item.id}
                  word = {item.word} 
                  translation = {item.translation}
                  extra = {<DeleteToolTip 
                    id={item.id} 
                    storage={storage}  
                    setStorage={setStorage}
                  />}
                />
              } else {
                return null
              }
            })
          : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
        }
      </Tabs.TabPane>
    </Tabs>
  );
};

export default Dictionary;