# PWA showcase project

## Requirement

- can install
- have icon with markable
- have theme color (on browser header) <https://maskable.app/>
- show splash screen (create new for ios) <https://appsco.pe/developer/splash-screens>
- display mode: standalone
- show float button on bottom right corner if show on PWA (standalone)
- dark mode
- install dialog and button on bottom of website **<https://web.dev/codelab-make-installable/>**
- if installed, dialog and button will show ‘open app’ dialog instead
- show offline status bar when no network connected
- have service worker (created by workbox injected manifest)
  - file to cache ……
  - recache time …… ()
  - strategy : staled while revalidate
- keep ….. on indexDB in “article/object” format (2 tables) using “idb” lib
- have app shortcut (click icon on screen to show shortcut)
- have notification on “timer” feature (show noti + add badge on icon) <https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon#updating_the_badge_in_the_background>
- and song and make it controllable on mobile notification bar
- can share like native app
- can share x(twitter) post on website
- make enter key be “previous”
- can add contact (tel) to post

- deploy on vercel for https
- deploy on play store (all scores must green , near 180) <https://www.pwabuilder.com/>

## Workflow

- **design & artwork**
  - app name
  - icon
  - theme color
  - splash image
  - web color (light/dark)
  - music
  - music artwork
- **tools & framework**
  - vite + ts + tailwind
  - ci code
  - commitlint
  - formatter (code + tailwind)
- manifest (init and test)
- service worker (init and test)

## Backlog

- welcome page
  - welcome message and status
- menubar
  - to feature 1
  - to feature 2
  - change name
  - dark mode switcher
- to do list feature
  - float add button (show when PWA installed)
- X board feature (disabled when offline)
- change name feature
- install invite dialog
