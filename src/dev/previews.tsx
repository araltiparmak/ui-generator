import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import React from 'react'

import { SelectVersion } from '../components/SelectVersion'
import { PaletteTree } from './palette'

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/SelectVersion">
        <VersionSelect />
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews
