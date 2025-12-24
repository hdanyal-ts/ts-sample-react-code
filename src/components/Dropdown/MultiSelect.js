import React from 'react'
import Select from 'react-select'
import EN_LABELS from '@public/content/english'

function MultiSelect ({ id, options, selectedOptions, onChange, placeholder }) {
  return (
    options.length > 0 && (
      <Select
        inputId={id}
        closeMenuOnSelect={false}
        isMulti
        placeholder={
          placeholder ??
          EN_LABELS['app.default.dropdown.default-placeholder']
        }
        options={options}
        selectedOptions={selectedOptions}
        onChange={onChange}
      />
    )
  )
}

export default MultiSelect
