type TempEvent = 'click' | 'hover';

type EventIndex = {
  [key in TempEvent]?: string
}

const temp: EventIndex = {
  'click': 'hello',
}