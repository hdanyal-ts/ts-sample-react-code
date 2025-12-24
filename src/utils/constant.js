import EN_LABELS from '@public/content/english'

export const NAVIGATION_ITEMS = [
  {
    id: 'previous-handoff-link',
    label: EN_LABELS['app.ddds.handoff.previous.title'],
    href: '/ddds/handoff/previous',
    icon: 'ArrowLeft'
  },
  {
    id: 'current-handoff-link',
    label: EN_LABELS['app.ddds.handoff.current.title'],
    href: '/ddds/handoff/current',
    icon: 'ArrowRight'
  },
  {
    id: 'reports-link',
    label: EN_LABELS['app.ddds.reports.title'],
    href: '/ddds/reports',
    icon: 'Reports'
  },
  {
    id: 'huddle-board-link',
    label: EN_LABELS['app.default.sidebar.link.huddle-board'],
    href: '/ddds/huddle-board/kpi',
    icon: 'HuddleBoard'
  },
  {
    id: 'defect-log-link',
    label: EN_LABELS['app.ddh.defect-log.title'],
    href: '/ddh/defect-log',
    icon: 'Warning'
  },
  {
    id: 'schedule-dropdown',
    label: EN_LABELS['app.default.sidebar.link.schedules'],
    icon: 'Schedule',
    links: [
      {
        id: 'live-schedule-link',
        label: EN_LABELS['app.ops.live-schedule.title'],
        href: '/ops/live-schedule'
      },
      {
        id: 'raw-attributes-link',
        label: EN_LABELS['app.ops.raw-attributes.title'],
        href: '/ops/raw-attributes'
      },
      {
        id: 'production-schedule-link',
        label: EN_LABELS['app.ops.production-schedule.title'],
        href: '/ops/production-schedule'
      }
    ]
  },
  {
    id: 'centerline-dropdown',
    label: EN_LABELS['app.default.sidebar.link.centerline'],
    icon: 'Centerline',
    links: [
      {
        id: 'overview-link',
        label: EN_LABELS['app.default.sidebar.link.overview'],
        href: '/ops/overview'
      },
      {
        id: 'deviations-link',
        label: EN_LABELS['app.default.sidebar.link.deviations'],
        href: '/ops/deviation/history'
      },
      {
        id: 'recipe-catalogue-link',
        label: EN_LABELS['app.ops.products.title'],
        href: '/ops/products'
      }
    ]
  },
  {
    id: 'settings-link',
    label: EN_LABELS['app.default.settings.title'],
    href: '/settings',
    icon: 'Settings'
  }
]
