import { Card } from 'antd'
import React, { ReactNode } from 'react'

export default function LoadingQuestionCard({loading, actions}:{loading?:boolean,actions?:ReactNode[]}) {
  return (
    <Card loading={loading} actions={actions} style={{width:"100%" }}>
        <Card.Meta/>
    </Card>
  )
}
