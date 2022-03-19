export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T
}

interface CustomEventProps {
  handled: boolean
}

export interface CustomHandledEvent extends CustomEventProps, JQuery.TriggeredEvent<HTMLElement, undefined, any, any> {}

export interface CustomTouchHandledEvent
  extends CustomEventProps,
    JQuery.TouchStartEvent<HTMLElement, undefined, any, any> {}

export interface CustomDoubleClickEvent
  extends CustomEventProps,
    JQuery.DoubleClickEvent<HTMLElement, undefined, any, any> {}

export interface CustomTriggeredEvent
  extends CustomEventProps,
    JQuery.TriggeredEvent<WheelEvent, undefined, any, any> {}
