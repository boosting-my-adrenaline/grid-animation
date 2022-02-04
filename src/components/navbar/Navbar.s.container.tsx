import React from 'react'
import { Card } from '../main/cards.former'
import { NavbarSuggested } from './Navbar.suggested'

interface IProps {
  shownSuggestion: null | number
  setShownSuggestion: (show: null) => void
  open: null | number
  setOpen: (open: null | number) => void
  parentWidth: number
  height: number
  params: { x: number; y: number }
  setParams: (params: { x: number; y: number }) => void
  multiple: number
  setMultiple: (multiple: number) => void
  isResizing: boolean
  loading: boolean
  windowWidth: number
  cards: Card[]
}

export const NavbarScontainer: React.FC<IProps> = ({
  shownSuggestion,
  setShownSuggestion,
  open,
  setOpen,
  height,
  parentWidth,
  params,
  setParams,
  multiple,
  setMultiple,
  isResizing,
  loading,
  windowWidth,
  cards,
}) => {
  return (
    <div>
      <NavbarSuggested
        shownSuggestion={shownSuggestion}
        setShownSuggestion={setShownSuggestion}
        open={open}
        setOpen={setOpen}
        parentWidth={parentWidth}
        height={height}
        params={params}
        setParams={setParams}
        multiple={multiple}
        setMultiple={setMultiple}
        isResizing={isResizing}
        loading={loading}
        windowWidth={windowWidth}
        cards={cards}
      />
    </div>
  )
}
