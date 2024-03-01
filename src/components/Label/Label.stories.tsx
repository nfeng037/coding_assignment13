import React from 'react'
import { type Meta, type StoryObj, type Story } from '@storybook/react'
import Label from './Label'
import { type LabelProps } from './Label.types'
import { darkTheme } from '../../utils'
import { ThemeProvider } from 'styled-components'

const meta: Meta = {
  title: 'Components/Label',
  component: Label,
  argTypes: {}
}
export default meta

const Template: Story<LabelProps> = (args) => <Label {...args} />

export const Default: StoryObj<LabelProps> = {
  args: {
    htmlFor: 'my-input',
    text: 'Username:'
  }
}

export const SmallFontSize: StoryObj<LabelProps> = {
  args: {
    ...Default.args,
    size: 'small'
  }
}

export const LargeFontSize: StoryObj<LabelProps> = {
  args: {
    ...Default.args,
    size: 'large'
  }
}

export const DisabledLabel: StoryObj<LabelProps> = {
  args: {
    ...Default.args,
    size: 'large',
    disabled: true
  }
}

export const DarkThemeFont = Template.bind({})
DarkThemeFont.args = {
  size: 'medium',
  text: 'Default Front',
  color: darkTheme.textColor
}
DarkThemeFont.decorators = [
  (Story) => (
    <ThemeProvider theme={darkTheme}>
      <Story />
    </ThemeProvider>
  )
]
