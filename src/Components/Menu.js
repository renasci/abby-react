import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FileSearchOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { Menu as AntMenu, Layout } from 'antd';
import { useDispatch, useSelector} from "react-redux"
import { setCollapsed, setMobileView} from '../Redux/actions'
import { useNavigate } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const { Sider } = Layout;
  const collapsed = useSelector((state) =>  state.app.collapsed)
  const mobileView = useSelector((state) =>  state.app.mobileView)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const selectMenuItem = (e) => {
    if(mobileView) {
      dispatch(setCollapsed(true))
    }

    navigate(`/${e.key}`, { replace: true });
  }

  const collaps = () => {
    dispatch(setCollapsed(!collapsed))
  }

  return (
    <Sider 
      trigger={null} 
      collapsible 
      collapsed={collapsed} 
      collapsedWidth="35px" 
      breakpoint="xs" 
      onBreakpoint={broken => {
        dispatch(setCollapsed(broken))
        dispatch(setMobileView(broken))
      }}
    >
      <div className="menu-conteiner">
        {
          collapsed 
          ? <MenuUnfoldOutlined 
              className = "menu-btn" 
              onClick = {collaps}
            /> 
          : <MenuFoldOutlined  
              className = "menu-btn"
              onClick = {collaps}
            />
        }
        {
          !collapsed && 
          <svg              
            fill="#FB2D48" 
            className="menu-icon"
          >  
            <path d='M27.822 23.805h-.845c-5.93 0-9.612 4.185-9.65
              4.23l-.694.913c-.032.042-.083.067-.137.067H13.94c-.054
              0-.105-.026-.137-.07l-.68-.93c-.033-.04-3.592-4.21-9.647-4.21H2.178c-.094
              0-.17-.074-.17-.164v-4.514c0-.09.076-.165.17-.165h1.06l.192-1.55c.005-.044.028-.083.064-.11.035-.027.08-.04.125-.034l1.213.142c5.422.636
              8.83 3.406 10.443 5.096 1.613-1.69 5.02-4.46
              10.432-5.096l1.214-.142c.05-.007.09.007.126.034.035.027.058.066.063.11l.194
              1.55h.518c.094 0 .17.075.17.166v4.515c0 
              .09-.076.165-.17.165zm-12.595-6.29c-2.712 
              0-4.917-2.138-4.917-4.765s2.205-4.765 4.917-4.765c2.71 
              0 4.916 2.138 4.916 4.765s-2.205 4.764-4.916 4.764zM88.82 
              20.385v4.608h-2.99v-4.61c-.014-.043-2.532-8.64-2.532-8.64h2.782s1.036 
              4.493 1.276 5.31c.254-.814 1.373-5.31 1.373-5.31h2.62s-2.515 
              8.595-2.53 8.642zm-8.373 4.608H77.46v-4.61c-.015-.043-2.534-8.64-2.534-8.64h2.782s1.036
              4.493 1.276 5.31c.254-.814 1.373-5.31 1.373-5.31h2.62s-2.515
              8.595-2.53 8.642v4.608zm-7.202-6.887c1.486.477 
              1.715 1.92 1.715 3.314 0 1.63-.6 3.573-3.47 
              3.573H67.37v-13.25h4.137c1.407 0 3.493.363 
              3.493 3.503 0 1.427-.772 2.442-1.753 2.86zM71.15 
              14.03h-.796v3.007h.914c.47 0 .804-.394.804-1.504 
              0-.87-.264-1.504-.923-1.504zm-.075 5.294h-.72v3.383h.66c.452 
              0 1.175 0 1.175-1.682 0-1.193-.182-1.7-1.115-1.7zM66.53 
              21.42c0 1.63-.602 3.573-3.47 3.573h-4.124v-13.25h4.14c1.406 
              0 3.49.363 3.49 3.503 0 1.427-.77 2.442-1.754 
              2.86 1.49.477 1.718 1.922 1.718 3.314zm-3.81-7.39h-.797v3.007h.915c.468 
              0 .802-.394.802-1.503 0-.87-.26-1.505-.92-1.505zm-.075 
              5.294h-.722v3.383h.66c.453 0 1.177 0 
              1.177-1.682 0-1.193-.184-1.7-1.115-1.7zm-7.353 
              2.847h-2.44l-.55 2.823h-2.553l2.587-13.25h3.47l2.588 
              13.25h-2.553l-.55-2.822zm-1.22-6.246l-.772 3.958h1.544l-.772-3.958z'
            >
            </path>
          </svg>
        }
      </div>
      <AntMenu
        theme="dark"
        mode="inline"
        items={[
          {
            key: 'translate',
            icon: <FileSearchOutlined />,
            label: 'Translate',
          },
          {
            key: 'dictionary',
            icon: <FileTextOutlined />,
            label: 'Dictionary',
          }
        ]}
        onSelect = {(e) => {selectMenuItem(e)}}
      />
    </Sider>
  )
}

export default Menu