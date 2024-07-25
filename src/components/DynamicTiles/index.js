import {Card, Col} from 'antd'
import Link from 'next/link'
import './index.css'
export default function ({tilesData, pathName}) {
  return (
    <Col span={6} style={{marginBottom: '18px'}}>
      <Link href={`/${pathName}/${tilesData.shiftId}`}>
        <Card title={`${tilesData.name}`} className="card-tile" bordered={false}>
          <p>OEE: {tilesData.oee}%</p>
          <p>Availability: {tilesData.availability}%</p>
          <p>Performance: {tilesData.performance}%</p>
          <p>Quality: {tilesData.quality}%</p>
        </Card>
      </Link>
    </Col>
  )
}
