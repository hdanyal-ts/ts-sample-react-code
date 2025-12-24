import * as React from 'react'
import {
  DateLabel,
  ModalContentTable,
  ModalContentTableRow,
  ModalContentTableRowAttachments,
  ModalContentTableRowDescription,
  ModalContentTableRowTitle,
  ModalImage
} from '../styles'
import { formatDate } from '@utils/format'

export function ContentTable ({ report = {} }) {
  return (
    <ModalContentTable>
      <ModalContentTableRow>
        <ModalContentTableRowTitle>Report</ModalContentTableRowTitle>
        <ModalContentTableRowDescription>
          {report?.id}
        </ModalContentTableRowDescription>
      </ModalContentTableRow>
      <ModalContentTableRow>
        <ModalContentTableRowTitle>Area</ModalContentTableRowTitle>
        <ModalContentTableRowDescription>
          {report?.area}
        </ModalContentTableRowDescription>
      </ModalContentTableRow>
      <ModalContentTableRow>
        <ModalContentTableRowTitle>Description</ModalContentTableRowTitle>
        <ModalContentTableRowDescription>
          {report?.description}
        </ModalContentTableRowDescription>
      </ModalContentTableRow>
      <ModalContentTableRow>
        <ModalContentTableRowTitle>Reported By</ModalContentTableRowTitle>
        <ModalContentTableRowDescription>
          <div>{report?.reportedBy}</div>
          <DateLabel>{formatDate(report?.createdAt)}</DateLabel>
        </ModalContentTableRowDescription>
      </ModalContentTableRow>
      <ModalContentTableRow>
        <ModalContentTableRowTitle>Attachments</ModalContentTableRowTitle>
        <ModalContentTableRowAttachments>
          {report?.attachments?.slice(0, 2)?.map((url, i) => (
            <ModalImage key={`${report?.id}-${i}`} src={url} />
          ))}
        </ModalContentTableRowAttachments>
      </ModalContentTableRow>
    </ModalContentTable>
  )
}
