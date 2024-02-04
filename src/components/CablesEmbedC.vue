<template>
  <canvas v-bind:id="canvasId" tabIndex="1"></canvas>
</template>

<script>
/**
 * code taken from https://github.com/undev-studio/cables_vue/blob/main/src/components/CablesPatch.vue
 * license: https://github.com/undev-studio/cables_vue/blob/main/LICENSE
 * add props.patchName
 */
export default {
  props: {
    patchDir: {
      type: String,
      default: '/cables/',
    },
    patchName: {
      type: String,
      default: 'default',
    },
    canvasId: {
      type: String,
      default: 'glcanvas',
    },
    patchOptions: {
      type: Object
    },
  },
  computed: {
    mergedPatchOptions() {
      const defaultOptions = {
        'prefixAssetPath': this.patchDir + this.patchName,
        'jsPath': this.patchDir + '/js/',
        'glCanvasId': this.canvasId,
        'glCanvasResizeToWindow': true,
        'canvas': {'alpha': true, 'premultipliedAlpha': true}
      };
      return {...defaultOptions, ...this.patchOptions }
    }
  },
  mounted() {
    const _patchInitialized = (patch) => {
      // You can now access the patch object (patch), register variable watchers and so on
      console.log(this.patchDir + this.patchName + ' initialized');
    };

    const _patchFinishedLoading = (patch) => {
      // The patch is ready now, all assets have been loaded
      console.log(this.patchDir + this.patchName + ' finished loading');
    };

    const script = document.createElement('script');
    script.src = this.patchDir + this.patchName + '/js/patch.js';
    script.async = true;
    script.onload = () => {
      const patchOptions = this.mergedPatchOptions;
      if (!patchOptions.patch) patchOptions.patch = CABLES.exportedPatch;
      if (!patchOptions.onPatchLoaded) patchOptions.onPatchLoaded = _patchInitialized;
      if (!patchOptions.onFinishedLoading) patchOptions.onFinishedLoading = _patchFinishedLoading;
      CABLES.patch = new CABLES.Patch(patchOptions);
    };
    document.body.appendChild(script);
  },
};
</script>