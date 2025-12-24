import React, { useState } from 'react'
import { PageWrapper, getSidebarLayout } from '@components/Layout'
import EN_LABELS from '@public/content/english'
import { PrimaryButton } from '@components/Buttons'
import DefectActions from '@components/ddh/DefectActions'
import DefectKanban from '@components/ddh/DefectKanban'
import { GET_ARCHIVED_DEFECTS, GET_DEFECTS } from '@public/data/sample'
import { groupDefectsByStatus } from '@utils/dataUtils'
import DefectList from '@components/ddh/DefectList'

export async function getStaticProps () {
  const title = EN_LABELS['app.ddh.defect-log.title']
  const data = GET_DEFECTS.data
  const archived = GET_ARCHIVED_DEFECTS.data
  return { props: { title, archived, data } }
}
export default function DefectLogPage ({ title, archived, data }) {
  const [activeView, setActiveView] = useState(0)

  const buttonLabel = `+ ${EN_LABELS['app.default.table.header.defect']}`

  const toggleView = index => () => setActiveView(index)
  const toggleFilter = () => console.log('OPEN FILTERING')
  const toggleSort = () => console.log('OPEN SORTING')

  const groupedDefects = groupDefectsByStatus(data.defects)

  const composeDefectView = () => {
    switch (activeView) {
      case 0:
        return <DefectKanban id='kanban-view' defects={groupedDefects} />
      case 1:
        return <DefectList id='list-view' defects={data.defects} />
      case 2:
        return <DefectList id='archive-view' defects={archived.defects} />
      default:
        return <></>
    }
  }

  return (
    <PageWrapper
      id='defect-log'
      title={title}
      icon='Warning'
      component={
        <PrimaryButton
          id='create-defect-button'
          label={buttonLabel.toUpperCase()}
        />
      }
    >
      <DefectActions
        activeView={activeView}
        toggleView={toggleView}
        toggleFilter={toggleFilter}
        toggleSort={toggleSort}
      />
      {composeDefectView()}
    </PageWrapper>
  )
}

DefectLogPage.getLayout = getSidebarLayout
