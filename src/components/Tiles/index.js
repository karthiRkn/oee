import {Card, Avatar, Switch} from 'antd'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import './index.css' // Assuming you have some custom styles
import Link from 'next/link'

export default function TileComponent({jsonData}) {
  const {icon, pathName, tilesData} = jsonData
  const {shiftId, oee, availability, performance, quality, name} = tilesData
  const actions = [
    <EditOutlined key="edit" />,
    <SettingOutlined key="setting" />,
    <EllipsisOutlined key="ellipsis" />,
  ]

  return (
    <Card
      actions={actions}
      className="card-tile"
      style={{minWidth: 230, margin: '5px'}}
    >
      <Link href={`/${pathName}/${shiftId}`}>
        <Card.Meta
          avatar={
            <Avatar
              src={
                icon ||
                'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
              }
            />
          } // Example avatar URL
          title={`${name}`}
          description={
            <>
              <p>OEE: {oee}%</p>
              <p>Availability: {availability}%</p>
              <p>Performance: {performance}%</p>
              <p>Quality: {quality}%</p>
            </>
          }
        />
      </Link>
    </Card>
  )
}
