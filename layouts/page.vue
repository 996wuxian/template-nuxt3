<template>
  <div class="overflow-x-hidden">
    <LayoutPageNavbar class="h-64px flex bg-red" />
    <LayoutPageContent style="min-height: var(--layout-page-content-min-height)">
      <slot />
    </LayoutPageContent>
    <LayoutPageFooter class="h-[52px] md:h-[42px]" />
  </div>
</template>
