import type { RouteLocationRaw } from 'vue-router'
import type { NuxtApp } from '#app'
import type { AwesomeLayoutPageNavbarMenu } from './types'

export interface NuxtAwesomeAppConfig {
  /** title name */
  name?: string
  /** description */
  description?: string

  /** project config */
  project?: {
    /** links */
    links?: {
      /** project github link */
      github?: string
    }
  }

  /** layout config */
  layout?: {
    /** page layout */
    page?: {
      /** navbar */
      navbar?: {
        /** menus in navbar */
        menus?: AwesomeLayoutPageNavbarMenu[]
      }
    }
    /** footer */
    footer?: {
      /** footer year */
      year?: number
    }
    /** welcome component page */
    welcome?: {
      title?: string
      disableInfoReplaceIndexInWelcomePage?: boolean
      primaryActionButton?: {
        title?: string
        to?: RouteLocationRaw | ((nuxt: NuxtApp) => RouteLocationRaw)
      }
      secondaryActionButton?: {
        title?: string
        to?: RouteLocationRaw | ((nuxt: NuxtApp) => RouteLocationRaw)
      }
    }
  }

  /** author config */
  author?: {
    /** author name */
    name?: string
    /** author links */
    links?: {
      /** author github link */
      github?: string
      /** author medium link */
      medium?: string
      /** author website link */
      website?: string
    }
  }

  /** author config */
  disableInfoReplaceIndexInWelcomePage?: boolean
}

declare module '@nuxt/schema' {
  interface AppConfigInput {
    awesome?: NuxtAwesomeAppConfig
  }
}

export default defineAppConfig({
  awesome: {
    // 标题
    name: 'Nuxt3 Template',
    description: 'a template for Nuxt 3',
    project: {
      links: {
        github: 'https://github.com/viandwi24/nuxt3-awesome-starter'
      }
    },
    layout: {
      page: {
        navbar: {
          menus: []
        }
      },
      footer: {
        year: new Date().getFullYear()
      },
      welcome: {
        title: 'Nuxt&nbsp;3 Awesome Starter',
        disableInfoReplaceIndexInWelcomePage: true,
        primaryActionButton: {
          title: 'Nuxt 3',
          to: 'https://nuxt.com/'
        },
        secondaryActionButton: {
          title: 'Github',
          to: 'https://github.com/viandwi24/nuxt3-awesome-starter'
        }
      }
    },
    author: {
      name: 'carpe_diem',
      links: {
        github: 'https://github.com/996wuxian'
      }
    },
    disableInfoReplaceIndexInWelcomePage: false
  } as NuxtAwesomeAppConfig,
  nuxtIcon: {
    aliases: {},
    class: '',
    size: '1em'
  }
})
