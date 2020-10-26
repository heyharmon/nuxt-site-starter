<template lang="html">
    <header class="header position-relative js-header ">
      <div class="header__container container max-width-lg">
        <div class="header__logo">
            <nuxt-link to="/">
              <svg width="104" height="30" viewBox="0 0 104 30"><title>Go to homepage</title><path d="M37.54 24.08V3.72h4.92v16.37h8.47v4zM60.47 24.37a7.82 7.82 0 01-5.73-2.25 8.36 8.36 0 01-2-5.62 8.32 8.32 0 012.08-5.71 8 8 0 015.64-2.18 8.07 8.07 0 015.68 2.2 8.49 8.49 0 012 5.69 8.63 8.63 0 01-1.78 5.38 7.6 7.6 0 01-5.89 2.49zm0-3.67c2.42 0 2.73-3 2.73-4.23s-.31-4.26-2.73-4.26-2.79 3-2.79 4.26.32 4.23 2.82 4.23zM95.49 24.37a7.82 7.82 0 01-5.73-2.25 8.36 8.36 0 01-2-5.62 8.32 8.32 0 012.08-5.71 8.4 8.4 0 0111.31 0 8.43 8.43 0 012 5.69 8.6 8.6 0 01-1.77 5.38 7.6 7.6 0 01-5.89 2.51zm0-3.67c2.42 0 2.73-3 2.73-4.23s-.31-4.26-2.73-4.26-2.8 3-2.8 4.26.31 4.23 2.83 4.23zM77.66 30c-5.74 0-7-3.25-7.23-4.52l4.6-.26c.41.91 1.17 1.41 2.76 1.41a2.45 2.45 0 002.82-2.53v-2.68a7 7 0 01-1.7 1.75 6.12 6.12 0 01-5.85-.08c-2.41-1.37-3-4.25-3-6.66 0-.89.12-3.67 1.45-5.42a5.67 5.67 0 014.64-2.4c1.2 0 3 .25 4.46 2.82V8.81h4.85v15.33a5.2 5.2 0 01-2.12 4.32A9.92 9.92 0 0177.66 30zm.15-9.66c2.53 0 2.81-2.69 2.81-3.91s-.31-4-2.81-4-2.81 2.8-2.81 4 .27 3.91 2.81 3.91zM55.56 3.72h9.81v2.41h-9.81z" fill="var(--color-contrast-higher)"/><circle cx="15" cy="15" r="15" fill="var(--color-primary)"/></svg>
            </nuxt-link>
        </div>

        <button class="btn btn--subtle header__trigger js-header__trigger" aria-label="Toggle menu" aria-expanded="false" aria-controls="header-nav">
          <i class="header__trigger-icon" aria-hidden="true"></i>
          <span>Menu</span>
        </button>

        <nav class="header__nav js-header__nav" id="header-nav" role="navigation" aria-label="Main">
          <div class="header__nav-inner">
            <div class="header__label">Main menu</div>
            <ul class="header__list">
                <li class="header__item"><nuxt-link to="/about" class="header__link">About</nuxt-link></li>
                <li class="header__item"><nuxt-link to="/solutions" class="header__link">Solutions</nuxt-link></li>
                <li class="header__item"><nuxt-link to="/resources" class="header__link">Resources</nuxt-link></li>
                <li class="header__item"><nuxt-link to="/pricing" class="header__link">Pricing</nuxt-link></li>
                <li class="header__item"><nuxt-link to="/contact" class="header__link">Contact</nuxt-link></li>
                <li class="header__item header__item--divider" aria-hidden="true"></li>
                <li class="header__item"><nuxt-link to="/download" class="btn btn--primary">Download</nuxt-link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
</template>

<script>
export default {
    name: 'b-navigation-1',
    
    mounted() {
        // File#: _1_header
        // Usage: codyhouse.co/license
        (function() {
          var mainHeader = document.getElementsByClassName('js-header');
          if( mainHeader.length > 0 ) {
            var trigger = mainHeader[0].getElementsByClassName('js-header__trigger')[0],
              nav = mainHeader[0].getElementsByClassName('js-header__nav')[0];

            // we'll use these to store the node that needs to receive focus when the mobile menu is closed
            var focusMenu = false;

            //detect click on nav trigger
            trigger.addEventListener("click", function(event) {
              event.preventDefault();
              toggleNavigation(!Util.hasClass(nav, 'header__nav--is-visible'));
            });

            // listen for key events
            window.addEventListener('keyup', function(event){
              // listen for esc key
              if( (event.keyCode && event.keyCode == 27) || (event.key && event.key.toLowerCase() == 'escape' )) {
                // close navigation on mobile if open
                if(trigger.getAttribute('aria-expanded') == 'true' && isVisible(trigger)) {
                  focusMenu = trigger; // move focus to menu trigger when menu is close
                  trigger.click();
                }
              }
              // listen for tab key
              if( (event.keyCode && event.keyCode == 9) || (event.key && event.key.toLowerCase() == 'tab' )) {
                // close navigation on mobile if open when nav loses focus
                if(trigger.getAttribute('aria-expanded') == 'true' && isVisible(trigger) && !document.activeElement.closest('.js-header')) trigger.click();
              }
            });

            // listen for resize
            var resizingId = false;
            window.addEventListener('resize', function() {
              clearTimeout(resizingId);
              resizingId = setTimeout(doneResizing, 500);
            });

            function doneResizing() {
              if( !isVisible(trigger) && Util.hasClass(mainHeader[0], 'header--expanded')) toggleNavigation(false);
            };
          }

          function isVisible(element) {
            return (element.offsetWidth || element.offsetHeight || element.getClientRects().length);
          };

          function toggleNavigation(bool) { // toggle navigation visibility on small device
            Util.toggleClass(nav, 'header__nav--is-visible', bool);
            Util.toggleClass(mainHeader[0], 'header--expanded', bool);
            trigger.setAttribute('aria-expanded', bool);
            if(bool) { //opening menu -> move focus to first element inside nav
              nav.querySelectorAll('[href], input:not([disabled]), button:not([disabled])')[0].focus();
            } else if(focusMenu) {
              focusMenu.focus();
              focusMenu = false;
            }
          };
        }());
    }
}
</script>

<style lang="scss">
/* --------------------------------

File#: _1_header
Title: Main Header
Descr: Accessible website navigation
Usage: codyhouse.co/license

-------------------------------- */

:root {
  --header-height: 50px;

  @include breakpoint(md) {
    --header-height: 70px;
  }
}

.header {
  height: var(--header-height);
  width: 100%;
  background-color: var(--color-bg);
  z-index: var(--zindex-header);
}

.header--expanded {
  // class added when navigation is visible - small devices only
}

.header__container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

// logo
.header__logo {
  position: relative;
  z-index: 2;
  flex-shrink: 0;

  a, svg, img {
    display: block;
  }
}

// nav
.header__nav {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100vh;
  background-color: var(--color-bg);
  box-shadow: var(--shadow-md);
  overflow: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  font-size: 1.25em; // controls the font-size of all elements (sm)

  display: none;

  &::before { // top header bg + border
    content: '';
    display: block;
    position: sticky;
    top: 0;
    height: var(--header-height);
    background: inherit;
    border-bottom: 1px solid var(--color-contrast-low);
  }
}

.header__nav--is-visible {
  display: block;
}

.header__nav-inner {
  padding: var(--space-sm) var(--component-padding) var(--component-padding);
}

.header__label { // menu label
  font-size: var(--text-sm);
  color: var(--color-contrast-medium);
  margin-bottom: var(--space-sm);
}

.header__item { // nav list item
  margin-bottom: var(--space-sm);
}

.header__link { // link within list item
  color: var(--color-contrast-higher);
  text-decoration: none;

  &:hover, &[aria-current] { // style of :hover + selected link
    color: var(--color-primary);
  }
}

.header__item--divider { // element used to separate nav items
  height: 1px;
  width: 100%;
  background-color: var(--color-contrast-low);
}

// menu trigger
.header__trigger { // menu button
  position: relative;
  z-index: 2;
}

// menu icon
.header__trigger-icon {
  position: relative;
  display: block;
  height: 2px;
  width: 1em;
  background-color: currentColor;
  margin-right: var(--space-xxs);
  transition: 0.2s;

  &::before, &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: inherit;
    height: inherit;
    background-color: currentColor;
    transition: 0.2s;
  }

  &::before {
    transform: translateY(-5px);
  }

  &::after {
    transform: translateY(5px);
  }
}

.header__trigger[aria-expanded="true"] .header__trigger-icon {
  background-color: transparent;

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
}

@include breakpoint(md) {
  .header__nav {
    // reset
    position: static;
    background-color: transparent;
    width: auto;
    max-height: none;
    box-shadow: none;
    overflow: visible;
    overscroll-behavior: auto;
    display: block;

    font-size: 0.875em; // controls the font-size of all elements (md)

    &::before {
      display: none;
    }
  }

  .header__nav-inner {
    padding: 0; // reset
  }

  .header__label { // hide label
    @include srHide;
  }

  .header__list {
    display: flex;
    align-items: center;
  }

  .header__item {
    display: inline-block; // flex fallback
    margin-bottom: 0;
    margin-left: var(--space-md);
  }

  .header__item--divider {
    height: 1em;
    width: 1px;
  }

  .header__trigger {
    display: none;
  }
}

// no JS fallback
html:not(.js) {
  .header {
    height: auto;
    padding-top: var(--space-xs);
  }

  .header__trigger {
    display: none;
  }

  .header__container {
    display: block;
  }

  .header__nav {
    position: static;
    height: auto;
    padding: 0;
    box-shadow: none;
    overflow: visible;
    display: block;

    &::before {
      display: none;
    }
  }

  .header__nav-inner {
    position: static;
    height: auto;
    padding: var(--space-md) 0;
    overflow: visible;
  }

  @include breakpoint(md) {
    .header {
      height: var(--header-height);
      padding: 0;
    }

    .header__container {
      display: flex;
    }
  }
}
</style>
